import Profile from '@components/Profile';
import { FeedSkeleton, ProfileSkeleton } from '@components/Skeletons';
import UserPrompts from '@components/prompt/UserPrompts';
import { Suspense } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    params?.id &&
    <div className='w-full flex flex-col'>
      <div>
        <h2 className='head_text blue_gradient !leading-normal'>My Profile</h2>
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile id={params?.id} />
        </Suspense>
      </div>
      <Suspense fallback={<FeedSkeleton />}>
        <UserPrompts id={params?.id} />
      </Suspense>
    </div >
  )
}

export default Page