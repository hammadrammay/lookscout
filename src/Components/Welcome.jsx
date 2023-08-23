import React from 'react'

const Welcome = () => {
    return (
        <div className='d-flex w-full justify-center bg-[#FAFBFC] my-10'>
            <div className='flex flex-col  justif-center items-center text-center mx-20 md:mx-20 md:px-20'>
                <p className='font-bold start sm:text-start md:text-center  justify mt-10 text-blue-500'>
                    1% OF THE INDUSTRY </p>
                <h1 className=' mt-5 font-bold text-2xl flex sm:text-start md:text-center'>Welcome to your new digital reality that will rock yoLatest Blog Postsur world truly at all throughout.</h1>
                <div className='flex sm:flex-col md:flex-row justify-center m-4 my-10'>
                    <input placeholder='EMIAL' className=' py-3 px-2 sm:my-2  border mx-1 ' />
                    <button className='text-white bg-blue-600  sm:my-2  py-3 px-2 px-4 sm:mx-1 rounded-lg'>Submit</button>
                </div>
                <div className='flex justify-around flex-wrap  w-full '>
                    <div className='my-5 justify-center text-center items-center flex flex-start '>
                         <img src="check.svg" className='mx-2 bg-blue-500 rounded-2xl p-1'/>
                         <span>Fully Secure</span>
                    </div>

                    <div className='my-5 justify-center text-center items-center flex flex-start '>
                         <img src="check.svg" className='mx-2 bg-blue-500 rounded-2xl p-1'/>
                         <span>24/7 Support</span>
                    </div>


                    <div className='my-5 justify-center text-center items-center flex flex-start '>
                         <img src="check.svg" className='mx-2 bg-blue-500 rounded-2xl p-1'/>
                         <span>Done  Secure</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Welcome