import Feed from '@components/Feed'
import Search from '@components/Search';
import { FeedSkeleton } from '@components/Skeletons';
import AllPrompts from '@components/prompt/AllPrompts';
import { Suspense } from 'react'

const Page = ({ searchParams }: { searchParams: ISearchParams }) => {
  return (
    <section className='w-full flex-center flex-col mt-8'>

      <h1 className='head_text text-center leading-4'>
        Discover & Share
        <br className='max-md:hidden' />
        <p className='orange_gradient  '>AI-Powered Prompts</p>
      </h1>

      <p className='desc text-center mb-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum eros nulla, a interdum lorem accumsan ut. Aliquam porttitor ligula sit amet neque venenatis porta. Donec feugiat, diam eget vestibulum pulvinar, urna nunc dignissim enim, eget tincidunt ligula nulla id justo. Aenean ornare neque quis nibh sagittis rhoncus. Maecenas non convallis turpis.
      </p>

      <div className='w-full flex-col-center'>
        <div className='py-4 w-[90%] sm:w-[80%] xl:w-[50%]'><Search /></div>
        <Suspense key={searchParams?.query || "" + searchParams?.tag || ""} fallback={<FeedSkeleton/>} >
          <AllPrompts searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  )
}

export default Page