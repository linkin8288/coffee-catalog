import React from 'react'
import { Coffee } from '../typings'
import { AiFillStar } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

function Product({ name, formCode, assets, id }: Coffee) {
  return (
    <div className="bg-[#1E1E1E] rounded-md">
      <div className='relative flex flex-col justify-center items-center
       bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-[24px] px-3'>
        {/* Get API request to individual coffee */}
        <Link href={`/${id}`}>
          <Image 
            src={assets?.thumbnail.large.uri || assets?.fullSize.uri || assets?.masterImage.uri}
            className="object-cover rounded-[24px] pt-2 cursor-pointer"
            width="150"
            height="200"
            alt=''
          />
        </Link>
        <div className='absolute top-2 right-4 flex justify-center items-center'>
          <AiFillStar size={16} className='text-[#D98046] pr-1'/>
          <p className='text-xs'>4.5</p>
        </div>
        <div className='text-left px-2 w-full pt-4'>
          <p>{name}</p>
          <p className='text-[#83868D]'>{formCode}</p>
        </div>
        <div className='flex justify-between items-center w-full pt-4 pb-3'>
          <p className='text-2xl'><span className='text-[#D98046] pr-2'>$</span>2.6</p>
          <div className='bg-[#D98046] rounded-2xl p-2 cursor-pointer'>
            <HiPlus size={24}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product