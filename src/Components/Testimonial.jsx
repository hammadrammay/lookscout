import React from 'react'

const Testimonial = () => {
    return (
        <div className=''>
            <div className='sm:mx-10 md:mx-20 py-10 bg-[#F8F9FB] my-10 flex flex-col justify-center items-start md:items-center text-center'>


                <img src="Company Logo_2.svg" className='' />
                <h1 className='text-2xl my-4 text-start px-2'>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!.</h1>

                <div className='flex justify-center mt-5'>

                    <img src="Avatar.png" className='mx-2 h-2/3' />
                    <div className='flex flex-col '>
                        <h1 className='font-bold'>Lisa Smith</h1>
                        <h1 className='font-light'>CEO Company</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonial