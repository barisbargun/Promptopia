"use client";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@components/ui/dropdown-menu';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { linkConstant } from '@constants';
const Nav = () => {
  const { data: session }:{data:ISession | null} = useSession();
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  const returnProviders = useMemo(() => {
    return (
      providers &&
      Object.values(providers).map((provider: any) => (
        <button
          type='button'
          key={provider.name}
          onClick={() => {
            signIn(provider.id);
          }}
          className='black_btn'
        >
          Sign in with {provider.name}
        </button>
      ))
    );
  }, [providers])

  const returnProfileImage = useMemo(() => {
    return(
    <Image
      src={ "https://lh3.googleusercontent.com/a/ACg8ocI3YrqUv-4b2B6y3n_zOPXSi4LEDcVmUvNAahGNpYdkaYg=s96-c"}
      width={35}
      height={35}
      alt='profile-image'
      className='rounded-full'
    />
    )
  }, [session?.user?.image])

  return (
    <nav className='flex-between gap-2 w-full'>
      <Link href="/" className='flex-center gap-2'>
        <Image
          src="/assets/images/logo.svg"
          width={45}
          height={45}
          alt='logo'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Application */}

      <div className='gap-2 flex-between max-sm:hidden'>
        {
          session?.user ?
            (
              <>
                <Link href={linkConstant.CREATE_PROMPT} className='black_btn'>Create Post</Link>
                <button onClick={() => signOut()} className='outline_btn'>Sign out</button>
                <Link href={`/profile/${session.user?.id}` }>
                  
                  {returnProfileImage}
                </Link>
              </>
            ) :
            returnProviders
        }
      </div>
      {/* Mobile Application */}

      <div className='gap-2 flex-between sm:hidden'>

        {
          session ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                {returnProfileImage}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href={linkConstant.PROFILE}>Profile</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className='cursor-pointer'>
                  <Link href={linkConstant.CREATE_PROMPT}>Create Post</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className='cursor-pointer' onClick={() => signOut()}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) :
            returnProviders
        }






      </div>

    </nav >
  )
}

export default Nav