
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';




const Endsection = () => {

  

  return (
    <div className='md:w-[300px] md:mr-16  rounded-md my-16 flex flex-col'>

      <div className='w-full bg-gray-50 p-12 md:p-10'>

        <h3 className='font-semibold text-xl'>Retirement Strategy</h3>

        <div className='mt-6 '>
          <h4 className='font-semibold text-[12px]'>Employee contribution</h4>
          <Box >
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      
    </Box>
    
          <hr className='mt-6' />
        </div>

        <div className='mt-6 '>
          <h4 className='font-semibold text-[12px]'>Retirement Age</h4>
          <Box >
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      
    </Box>
    
          <hr className='mt-6' />
        </div>

        <div className='mt-6  flex flex-row'>

          <div>
            <h3 className='text-[12px]'>Employer contribution</h3>
            
            <h3 className='text-[12px] mt-4 '>Interest Rate</h3>
          </div>

          <div className='ml-6'>
            <h3 className='text-[12px]'>8.4%</h3>
            <h3 className='mt-4 text-[12px]'>5%</h3>
          </div>

        </div>

        <div className='mt-16'>
          <button className='w-full bg-blue-600 text-white py-4 rounded-lg'>Update</button>
        </div>

        <div className='text-center mt-6'>
          <h3 className='text-purple-700 text-[15px]'>View Help Docs</h3>
        </div>

      </div>

      <div className='hidden md:flex border-l-2 mt-8 border-l-purple-500'>
       <div className='ml-6'>

        <h3>Are you considering a</h3>
        <h3 className='font-semibold'>Housing Advance?</h3>
        <h4 className='text-[12px] my-2'>Limited time reduced interest.</h4>
        <h4 className='text-purple-700'>Learn more.</h4>

       </div>
        
      </div>

    </div>
  )
}

export default Endsection