import React from 'react'
import { FaHome } from 'react-icons/fa'
import {MdOutlineReorder, MdTableBar} from 'react-icons/md'
import {CiCircleMore} from 'react-icons/ci'
import {BiSolidDish} from 'react-icons/bi'

const BottonNav = () => {
  return (
    <div className='fixed  bottom-0 left-0 right-0 bg-[#262626] text-[#f5f5f5] p-2 h-16 flex justify-around'>
        <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] rounded-[200px] w-[200px]'><FaHome className='inline mr-2' size={20} /> Home</button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><MdOutlineReorder className='inline mr-2' size={20} /> Orders</button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><MdTableBar className='inline mr-2' size={20} /> Tables</button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><CiCircleMore className='inline mr-2' size={20} /> More</button>
        <button className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-5 items-center'>
            <BiSolidDish  size={30} />
        </button>  
    </div>
  )
}

export default BottonNav