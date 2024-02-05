"use client"
import React, { useState } from 'react'
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const list = ["Action", "Horror", "SciFy"]
  return (
    <div className='w-[200px]'>
        <button onClick={()=>{
            setIsOpen(!isOpen)
        }} className=' bg-gray-500 p-3 w-full font-bold flex items-center justify-between rounded-md active:duration-100 active:text-white active:border-2 active:border-white '>
            <div>Dropdown</div>
            <div>{isOpen? '^' : '-'}</div>
        </button>
        {isOpen && (
            <div className='flex flex-col items-start bg-gray-400 mt-2 rounded-md gap-3 p-4 '>
                {list.map((val,i)=>{
                    return (
                        <button key={i} className='font-bold hover:border-l-4 w-full text-start hover:border duration-100 rounded-e-md p-1'>{val}</button>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default Dropdown