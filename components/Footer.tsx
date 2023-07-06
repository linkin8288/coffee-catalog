import React from 'react'
import { BsHouseDoorFill } from 'react-icons/bs'
import { BiShoppingBag } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'

function Footer() {
  return (
    <div className='flex justify-evenly items-center h-24 
      w-full bottom-0 z-20 fixed bg-[#1E1E1E] mx-auto'>
      <BsHouseDoorFill size={30} className='cursor-pointer'/>
      <BiShoppingBag size={30} className='cursor-pointer'/>
      <AiFillHeart size={30} className='cursor-pointer'/>
      <IoMdNotifications size={30} className='cursor-pointer'/>
    </div>
  )
}

export default Footer