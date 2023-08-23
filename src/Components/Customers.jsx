import React from 'react'

const Customers = () => {
  return (
    <div className='flex flex-col my-20'>
             <div className='flex flex-col  justif-center items-center text-start mx-20 md:mx-20 md:px-20'>
                <h1 className=' my-5 font-bold text-2xl  md:whitespace-nowrap'> Proud to Be Used By </h1>
                <p className='font-light  sm:text-start md:text-start lg:text-center'>
                Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
            </div>
         
        <div className='flex justify-center px-20  mt-10'>
            <div className='flex flex-wrap justify-center'>
            <img src="Verge.svg" className='mt-5'/>
            <img src="Slack.svg" className='mt-5'/>
            <img src="PayPal.svg" className='mt-5'/>
            <img src="Pinterest.svg" className='mt-5'/>
            <img src="Mailchip.svg" className='mt-5'/>
            </div>
           
        </div>
    </div>
  )
}

export default Customers