import React from 'react'
import { GiHummingbird } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { PiNewspaper } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Sidepanel = () => {
  return (
    <div className='bg-gray-300 hidden md:flex'>

    <div className='bg-white w-10 p-10 items-center h-screen'>
               <div className='gap-5 items-center flex flex-col text-xl'>
                <GiHummingbird className='text-blue-600' />
                <CiSearch />
               </div>
    
               <div className='gap-7 mt-14 items-center flex flex-col text-xl'>
    
                <CiHome />
    
                <FaRegNewspaper />
    
                <PiNewspaper />
    
                <FaRegUser />
    
               </div>
    
               <div className='gap-7 items-center mt-[470px] flex flex-col text-xl'>
                <IoIosNotificationsOutline />
                <IoIosLogOut />
               </div>
    
            </div>
            
           
    
        </div>
  )
}

export default Sidepanel