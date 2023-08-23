import React from 'react'

const Post = () => {
    return (
        <div className='felx flex-col my-20 '>
            <div className='flex flex-col  justif-center items-center text-center mx-20 md:mx-20 md:px-20'>
                <h1 className=' my-5 font-bold text-2xl  md:whitespace-nowrap'>Latest Blog Posts</h1>
                <p className='font-light start sm:text-start md:text-center  justify'>
                    Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>
            </div>

            <div className='flex sm:m-5 md:m-20 md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 sm:flex sm:flex-col sm:items-center'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                    <img class="rounded-t-lg w-full h-[200px] object-fit" src="Rectangle 1.png" alt="" />

                    <div class="py-5 px-2">

                        <h1 class="mb-2 text-md font-bold text-black">Organize your digital assets with a new methodology here.</h1>

                        <p class="mb-3 font-normal text-gray-700 ">Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.</p>
                        <div className='flex justify-between mx-1'>
                            <div className='flex '>
                                <div className='flex justify-center mt-5 '>

                                    <img src="Avatar_1.png" className='h-2/3' />
                                    <div className='flex flex-col px-1'>
                                        <h1 className='font-bold text-xs'>Andrew Miller</h1>
                                        <h1 className='font-light text-xs'>CEO</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                <span className='font-light text-sm'>5 APR</span>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                    <img class="rounded-t-lg w-full h-[200px] object-fit" src="Rectangle 2.png" alt="" />

                    <div class="py-5 px-2">

                        <h1 class="mb-2 text-md font-bold text-black">Organize your digital assets with a new methodology here.</h1>

                        <p class="mb-3 font-normal text-gray-700 ">Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.</p>
                        <div className='flex justify-between mx-1'>
                            <div className='flex '>
                                <div className='flex justify-center mt-5 '>

                                    <img src="Avatar_2.png" className='h-2/3' />
                                    <div className='flex flex-col px-1'>
                                        <h1 className='font-bold text-xs'>David Munsan</h1>
                                        <h1 className='font-light text-xs'>UX</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                <span className='font-light text-sm'>5 APR</span>
                            </div>

                        </div>
                    </div>
                </div>



                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                    <img class="rounded-t-lg w-full h-[200px] object-fit " src="Rectangle 3.png" alt="" />

                    <div class="py-5 px-2">

                        <h1 class="mb-2 text-md font-bold text-black">Organize your digital assets with a new methodology here.</h1>

                        <p class="mb-3 font-normal text-gray-700 ">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .</p>


                        <div className='flex justify-between mx-1'>
                            <div className='flex '>
                                <div className='flex justify-center mt-5 '>

                                    <img src="Avatar_3.png" className='h-2/3' />
                                    <div className='flex flex-col px-1'>
                                        <h1 className='font-bold text-xs'>Andrew Meller</h1>
                                        <h1 className='font-light text-xs'>UI</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                <span className='font-light text-sm'>5 APR</span>
                            </div>

                        </div>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default Post