import { getUserById } from '@lib/data';
import Image from 'next/image'

const Profile = async ({ id }: { id: string }) => {
  const user = await getUserById(id);
  return (
    user ? (
      <div className='flex-between gap-2 p-1 my-5 w-fit'>
        <Image
          className='rounded-full'
          src={user.image || "/assets/icons/profile-placeholder.svg"}
          width={30}
          height={30}
          alt='creator-image'
        />
        <div className='flex-1'>
          <h2 className='font-satoshi font-semibold text-gray-900'>{user.username}</h2>
          <p className='font-inter text-sm text-gray-500'>{user.email}</p>
        </div>
      </div>) :
      (
        <h3 className='text-lg mt-4 blue_gradient'>
            No user found
        </h3>
      )
  )
}

export default Profile