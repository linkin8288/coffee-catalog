import React from 'react'
import { CgMenuRound } from "react-icons/cg"
import { CgProfile } from "react-icons/cg"

function Header() {
  return (
    <main className='mx-auto flex items-center bg-[#1E1E1E] pt-8 px-8 lg:px-14'>
      <div className='w-full'>
        <div className='flex justify-between text-white '>
          <CgMenuRound size={46} className='cursor-pointer'/>
          <CgProfile size={46} className='cursor-pointer'/>
        </div>
        <h1 className='pt-6 2xl:text-[72px] text-[30px] font-normal text-white'>
          Find the best 
        </h1>
        <h1 className='2xl:text-[72px] text-[30px] font-normal mt-[-10px]'><span className='text-[#D98046] 2xl:text-[72px] text-[30px] font-normal'>Coffee</span> for you</h1>
      </div>
    </main>
  )
}

export default Header