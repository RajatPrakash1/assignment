import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import {Bar, Doughnut} from "react-chartjs-2"; 

const Chart = () => {

  const data = {

    labels: ['Top'],
    datasets: [{
      label: 'poll',
      data: [3,6],
      backgroundColor: ['lightgreen' , 'green'],
      borderColor: ['white' , 'green']
    }]

  }


  const options = {

  }

  const textcenter = {

    id: 'textcenter',
    beforeDatasetsDraw(chart , args, pluginoptions){
      const {ctx , data} = chart;

      ctx.save();
      ctx.font = 'bolder 8px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillText('60%' , chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
      

    }
  }

  const secondtextcenter = {

    id: 'textcenter',
    beforeDatasetsDraw(chart , args, pluginoptions){
      const {ctx , data} = chart;

      ctx.save();
      ctx.font = 'bolder 8px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillText('70%' , chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
      

    }
  }

  const thirdtextcenter = {

    id: 'textcenter',
    beforeDatasetsDraw(chart , args, pluginoptions){
      const {ctx , data} = chart;

      ctx.save();
      ctx.font = 'bolder 8px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';
      ctx.fillText('75%' , chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
      

    }
  }

  const seconddata = {

    labels: ['Average'],
    datasets: [{
      label: 'poll',
      data: [8,6],
      backgroundColor: ['lightgreen' , 'green'],
      borderColor: ['white' , 'green']
    }]

  }

  const thirddata = {

    labels: ['Me'],
    datasets: [{
      label: 'poll',
      data: [7,6],
      backgroundColor: ['lightgreen' , 'green'],
      borderColor: ['white' , 'green']
    }]

  }
  

 

  return (
    <div>
      <div className='p-16 items-center  '>

        <div>
          <h3 className='text-purple-600 font-semibold'>Retirement Income</h3>
          <h2 className='font-semibold text-3xl'>Starting Year 2056</h2>

          <div className='mt-12 flex md:flex-row gap-16'>

            <div className=' flex flex-col'>

              <h2 className=' text-xl md:text-3xl font-semibold'>$300,000</h2>
              <h4 className='text-gray-400 mt-2'>My Goal</h4>
              <hr className='mt-2 text-purple-600' />

            </div>

            <div className=' flex flex-col'>

<h2 className=' text-xl md:text-3xl font-semibold'>$59%</h2>
<h4 className='text-gray-400 mt-2'>Goal Achieved</h4>
<hr className='mt-2 text-purple-600' />

</div>

<div className=' flex flex-col'>

<h2 className=' text-xl md:text-3xl font-semibold'>$300</h2>
<h4 className='text-gray-400 mt-2'>Est. Monthly Income</h4>
<hr className='mt-2 text-purple-600' />

</div>

            
          
          </div>

        </div>

        <div className='mt-14 flex flex-col'>

          <h2 className='font-semibold'>Contribution Overtime</h2>

          <div>
            <Bar data={{
              labels: ["20", "25", "30" , "35", "40", "60", "65"],
              datasets: [{
                label: "Employer",
                data: [75 , 80 , 90 , 95 , 250 , 270 , 300],
              },

              
            
            ],
            }} />
          </div>

        </div>

        <div>
          <h3 className='text-[15px] font-semibold mt-6'>How do I compare to my peers?</h3>
          <h5 className='text-gray-400 text-[12px] mt-6'>These Number Represent current Goal Achivement</h5>

          <div className='flex flex-row mt-5'>

            <div className='gap-4 font-semibold text-[14px] flex-row md:flex-col'>
              <h5 className='py-4'>Age: under 30</h5> <hr />
              <h5 className='py-4'>Salary: k 20 - k 30</h5> <hr />
              <h5 className='py-4'>Gender: male</h5> <hr />
              <div className='flex w-24 h-24 mt-8'>
               <Doughnut data = {data} options = {options} plugins = {[textcenter]}>

               </Doughnut>
               <Doughnut data = {seconddata} options = {options} plugins = {[secondtextcenter]}>

</Doughnut>
<Doughnut data = {thirddata} options = {options} plugins = {[thirdtextcenter]}>

</Doughnut>
              </div>
            </div>



          </div>
        </div>

      </div>
    </div>
  )
}

export default Chart