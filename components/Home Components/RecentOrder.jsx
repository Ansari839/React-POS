import React from 'react'
import { FaSearch } from "react-icons/fa";
import OrderList from './OrderList';

const RecentOrder = () => {
  return (
    <div className='px-8 mt-6'>
        <div className='bg-[#1a1a1a] w-full h-[450px] rounded-lg'>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-[#f5f5f5] '>Recent Orders</h1>
                <a href="" className='text-[#025cca] text-sm font-semibold'>Viwe All </a>
            </div>
            <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6'>
                <FaSearch className='text-[#f5f5f5] ' />
                <input type="text"
                placeholder='Search Recent Orders'
                className='bg-[#1f1f1f] outline-none text-[#f5f5f5]' />
            </div>
            {/* Order List */}
            <div className='mt-4 px-6 overflow-scroll scrollbar-hide h-[300px]'>
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            <OrderList />  
            </div>
        </div>
        </div>
)}

export default RecentOrder