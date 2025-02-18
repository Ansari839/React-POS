"use client"
import React, { useEffect, useState } from 'react'

const Greetings = () => {
    const [dateTime , setDatetime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=> setDatetime(new Date()),1000)
    },[])
    const formatDate = (date) =>{
        const months = ['January' ,'Februrary' , 'March','April','May','June','July','August','September','October','November','December'];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')},${date.getFullYear()}`
    };
    const formatTime = (date) => `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`
  return ( 
    <div className='flex justify-between items-center px-8 mt-5'>
        <div>
            <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Hello, Welcome </h1>
            <p className='text-[#ababab] text-sm'>Give Your Best To Customers</p>
        </div>
        <div>
            <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
            <p className='text-[#ababab] text-sm'>{formatDate(dateTime)} </p>
        </div>
    </div>
  )
}
   
export default Greetings