import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { RiAdminFill  } from "react-icons/ri"
import { FaCircleUser } from "react-icons/fa6";


export function Card() {
  return (
    <div className='flex justify-center gap-12 m-12'>
    <div className="w-[300px] rounded-md border">
      <div className="flex justify-center text-[4rem] h-1/3">
        <FaCircleUser/>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">User Login</h1>
       
        <button className="mt-6 text-sm text-black border border-black rounded-lg p-2 font-bold inline-flex items-center">GO
              <span className="ml-2"><BsArrowRight /></span>
            </button>
      </div>
    </div>
    <div className="w-[300px] rounded-md border">
      <div className="flex justify-center text-[4rem] h-1/3">
      <RiAdminFill />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">Admin Login</h1>
       
        <button className="mt-6 text-sm text-black border border-black rounded-lg p-2 font-bold inline-flex items-center">GO
              <span className="ml-2"><BsArrowRight /></span>
            </button>
      </div>
    </div>
   </div>

  )
}
