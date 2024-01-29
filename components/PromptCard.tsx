"use client"
import React from 'react'
import { HandleCopy } from '@lib/Buttons';
import { deletePrompt } from '@lib/actions';
import Image from 'next/image'
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

type props = {
  prompt: IPrompt;
  showButtons?: boolean;
  activeSearch?: boolean;
}

const PromptCard = ({ prompt, showButtons, activeSearch }: props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchTag = () => {
    if (activeSearch == false || !searchParams) return;
    const params = new URLSearchParams(searchParams);
    if (prompt?.tag) params.set("tag", prompt.tag);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDelete = async () => {
    if (showButtons && prompt && prompt._id)
      await deletePrompt({ _id: prompt._id, userId:prompt?.creator?._id});
  }

  return (
    <li className='flex flex-col w-full p-3 prompt_card max-h-72 min-h-40'>

      {!showButtons &&
        <div className='flex-between gap-2 p-1'>
          <Link href={`/profile/${prompt?.creator?._id}`}>
            <Image
              className='rounded-full'
              src={prompt?.creator?.image || "/assets/icons/profile-placeholder.svg"}
              width={30}
              height={30}
              alt='creator-image'
            />
          </Link>
          <div className='flex-1'>
            <h2 className='font-satoshi font-semibold text-gray-900'>{prompt?.creator?.username}</h2>
            <p className='font-inter text-sm text-gray-500'>{prompt?.creator?.email}</p>
          </div>

          <HandleCopy prompt={prompt?.prompt} />

        </div>
      }

      <div className='flex flex-col flex-1'>
        <p className='my-4 font-satoshi text-sm text-gray-700'>{prompt?.prompt}</p>
        <p onClick={handleSearchTag} className='font-inter text-sm blue_gradient cursor-pointer w-fit'>{prompt?.tag}</p>
      </div>

      {showButtons &&
        <div className='flex-center gap-2 text-sm'>
          <Link href={`/prompt/${prompt._id}`} className='blue_gradient'>Edit</Link>
          <button onClick={handleDelete} className='orange_gradient'>Delete</button>
        </div>
      }
    </li>
  )
}

export default PromptCard
