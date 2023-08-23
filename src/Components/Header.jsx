


import React from 'react';

const Header = () => {
    return (
        <div className="bg-[#3971E7] text-white p-5 flex sm:flex-wrap-reverse md:flex-nowrap ">
            <div className="w-full md:w-full md:pl-20 p-10 ">
                <h1 className="text-4xl font-bold mt-20 mb-5 md:whitespace-nowrap">
                    Your Supercharged <br /> Design Workflow
                </h1>
                <p className="text-lg sm:text-base">
                    We’ve been told it is not possible to overachieve our customers’
                    expectations. We have not reinvented the wheel, we decided to build
                    upon it.
                </p>
                <div className="mt-5">
                    <button className="bg-blue-500 py-3 px-4 rounded text-white">
                        Get Started
                    </button>
                </div>
                <p className="mt-10">Who supports us</p>
                <div className="mt-4 flex flex-wrap lg:flex-nowrap flex-shrink-0 ">
                    <img src="Git Logo.svg" className="mt-2 mr-1 md:mr-2" alt="Git Logo" />
                    <img src="Slack Logo.svg" className="mt-2 mr-1 md:mr-2" alt="Slack Logo" />
                    <img src="Netflix Logo.svg" className="mt-2 mr-1 md:mr-2" alt="Netflix Logo" />
                    <img src="PayPal Logo.svg" className="mt-2 mr-1 md:mr-2" alt="PayPal Logo" />
                </div>
            </div>

            <div className=" w-full  flex justify-center sm:mx-10 sm:mt-10 md:mt-10 md:py-20 md:min-h-fit lg:min-h-fit lg:pl-20 lg:ml-20 xl:max-h-fit xl:px-20 xl:py-0 xl:mx-20  xl:mt-0  ">
                <img src="Graphic elements.png" />
            </div>

            
        </div>
    );
};

export default Header;
