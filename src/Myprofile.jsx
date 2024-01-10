import React from 'react'
import { GiHummingbird } from "react-icons/gi";
import image  from "./pexels-tomé-louro-1666779.jpg"

const Myprofile = () => {
  return (
    <div className=' bg-gray-50 p-16 items-center md:w-[950px] h-screen'>


        <div className='flex flex-row'>

            <img src={image} className='h-12 w-12 object-cover rounded-full shadow-lg shadow-blue-100' alt="" />

            <div className='ml-4'>
                <h3>Hi Mike,</h3>
                <h4 className=''>welcome Back.</h4>
            </div>

        </div>

        <div className='mt-14  text-black'>
            <h3 className='font-semibold'>Today</h3>
            <div className='mt-6'>
                <h1 className='font-semibold text-3xl'>$19,892</h1>
                <h4 className='mt-2 text-gray-500 font-semibold text-[10px]'>Account Balance</h4>
            </div>
            <div className='mt-6'>
                <h1 className='font-semibold text-3xl'>$4000</h1>
                <h4 className='mt-2 text-gray-500 font-semibold text-[10px]'>Year-to-Date-Contribution</h4>
            </div>
            <div className='mt-6'>
                <h1 className='font-semibold text-3xl'>$1892</h1>
                <h4 className='mt-2 text-gray-500 font-semibold text-[10px]'>Total Interest</h4>
            </div>
            <button className='mt-6 hover:shadow-blue-200 hover:shadow-2xl bg-blue-700 rounded-lg w-full py-5 text-white'>I want to</button>
        </div>

        <div className='mt-22'>

        <div className='mt-6'>
                <h1 className='font-semibold text-[15px]'>Recent Transactions</h1>

                <div className='mt-2'>

                    <h4 className='text-[12px] text-gray-500'>2020-08-07</h4>
                    <h5 className='font-semibold text-[12px]'>Withdrawil-Transfer-to-Bank-xxx1</h5>
                   

                </div>
                <div className='mt-6'>

                    <h4 className='text-[12px] text-gray-500'>2020-07-21</h4>
                    <h5 className='font-semibold text-[12px]'>Withdrawil-Transfer-to-Bank-xxx1</h5>

                </div>
                <div className='mt-6'>

                    <h4 className='text-[12px] text-gray-500'>2020-07-16</h4>
                    <h5 className='font-semibold text-[12px] pb-36'>Withdrawil-Transfer-to-Bank-xxx1</h5>

                </div>
               
                </div>


        </div>

       


    </div>
  )
}

export default Myprofile