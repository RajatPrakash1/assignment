import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { PiNewspaper } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Bottompanel = () => {
  return (
    <div className='bg-white h-[50px] w-full fixed bottom-0 flex md:hidden '>

<div className='flex flex-row text-xl justify-between items-center px-14 w-full h-full'>

        <CiHome className='hover:shadow-lg hover:shadow-blue-400' />
        <FaRegNewspaper className='hover:shadow-lg hover:shadow-blue-400' />
        <PiNewspaper className='hover:shadow-lg hover:shadow-blue-400' />
        <FaRegUser className='hover:shadow-lg hover:shadow-blue-400' />
        <CiSearch className='hover:shadow-lg hover:shadow-blue-400' />

      </div>

    </div>
  )
}

export default Bottompanel