import Profile from '@components/Profile';
import { FeedSkeleton, ProfileSkeleton } from '@components/Skeletons';
import UserPrompts from '@components/prompt/UserPrompts';
import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { getUserById } from '@lib/data';
 
type props = {
  params: { id: string }
}

export async function generateMetadata({ params }:props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const user = await getUserById(id);
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: user?.username ? `${user?.username}'s Profile` : "My Profile",
    openGraph: {
      images: [`${user?.image}`, ...previousImages],
    },
  }
}

const Page = ({ params }: props) => {
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