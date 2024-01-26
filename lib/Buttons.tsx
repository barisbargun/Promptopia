"use client"

import Image from 'next/image'

export const HandleCopy = ({prompt}:{prompt:string}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <Image
      src="/assets/icons/copy.svg"
      width={20}
      height={20}
      alt='copy'
      className='cursor-pointer'
      onClick={handleCopy}
    />
  )
}
