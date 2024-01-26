const shimmer =
  'overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export const FeedSkeleton = () => {
  return (
    <ul className='grid grid-cols-1 w-full gap-4 md:grid-cols-2 xl:grid-cols-3'>
      <PromptSkeleton />
      <PromptSkeleton />
      <PromptSkeleton />
      <PromptSkeleton />
    </ul>
  )
}

export const PromptSkeleton = () => {
  return (
    <li className={`${shimmer} flex flex-col w-full p-3 prompt_card max-h-72 min-h-40`}>

      <div className='flex-between gap-2 p-1'>
        <div className="w-[30px] h-[30px] bg-gray-200"></div>
        <div className='flex-1'>
          <h2 className='bg-gray-200'>&nbsp;</h2>
          <p className='bg-gray-200'>&nbsp;</p>
        </div>

        <div className="w-[20px] h-[20px] bg-gray-200"></div>

      </div>

      <div className='flex flex-col flex-1'>
        <p className='my-4 bg-gray-200'>&nbsp;</p>
        <p className='w-fit bg-gray-200'>&nbsp;</p>
      </div>

      <div className='flex-center gap-2'>
        <button className='bg-gray-200 w-7'>&nbsp;</button>
        <button className='bg-gray-200 w-7'>&nbsp;</button>
      </div>
    </li>
  )
}

export const ProfileSkeleton = () => {
  return (
    <div className={`${shimmer} relative flex-between gap-2 p-1 my-5 w-fit`}>
      <div className="w-[30px] h-[30px] bg-gray-200"></div>
      <div className='flex-1'>
        <h2 className='bg-gray-200 w-44 mb-2'>&nbsp;</h2>
        <p className='bg-gray-200 w-44'>&nbsp;</p>
      </div>
    </div >
  )
}