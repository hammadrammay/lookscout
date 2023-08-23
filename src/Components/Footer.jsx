import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#151B28] w-full '>
            <div className='flex mt-5 pt-20 flex-wrap sm:justify-center md:justify-evenly  '>

                <div className='flex flex-col   sm:order-1 lg:order-1 sm:w-auto md:w-[250px] m-5 '>
                    <img src="Company Logo.svg" className='pb-2' />
                    <div className='sm:w-[300px] md:w-[200px] text-white'>
                        <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                    </div>
                </div>



                <div className='flex sm:justify-center md:justify-around  sm:order-2 md:order-3  lg:order-2  sm:w-full lg:w-auto my-5 md:pr-12 '>
                   
                    <div className='flex flex-col text-white sm:pr-12   '>
                        <h1 className='font-bold text-xl py-3'> Resources </h1>
                        <h1 className='font-light text-lg'> Community </h1>
                        <h1 className='font-light text-lg'> Events </h1>
                        <h1 className='font-light text-lg'> Help Center </h1>
                        <h1 className=' font-light text-lg'> Partners </h1>
                    </div>


                    <div className='flex flex-col text-white sm:pl-12 '>
                        <h1 className='font-bold text-xl py-3'> Products </h1>
                        <h1 className='font-light text-lg'> Integrations </h1>
                        <h1 className='font-light text-lg'> Solutions </h1>
                        <h1 className='font-light text-lg'> Features </h1>
                        <h1 className=' font-light text-lg'> Enterprise </h1>
                    </div>

                </div>





                <div className='flex flex-col text-white sm:w-[300px] sm:order-3 md:order-2 lg:order-3  m-5'>
                    <h1 className='font-bold text-xl py-3'>
                        Get Email Notifications
                    </h1>

                    <span className='font-light mt-2'>
                        Generate outside the box thinking with the possibility to targtet the low
                    </span>

                    <div className='flex  w-[300px] mt-3 '>
                        <input placeholder='EMAIL' className='py-1 w-[200px] px-3 bg-[#2C3444] ' />
                        <button className='bg-blue-700 px-3   '> Submit </button>
                    </div>


                </div>



            </div>

            <div className=' mx-10 py-5'>
                <div className="border-t border-black-400 my-5 "></div>
                <div className='flex justify-between  flex-wrap  text-white'>
                    <div className='sm:mr-10 sm:my-5'>
                        <h1 className='flex whitespace-nowrap'> © 2023 Lookscout. All Rights Reserved.</h1>
                    </div>

                    <div className='flex'>
                        <img src="Container.svg" className='mx-2' />
                        <img src="Text input.svg" className='mx-2' />
                        <img src="Social platforms logo.svg" className='mx-2' />
                        <img src="Text input (1).svg" className='mx-2' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer




