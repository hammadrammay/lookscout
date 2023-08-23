// // // import React, { useState } from 'react'


// // // import { FiMenu } from 'react-icons/fi';
// // // import {GrClose} from 'react-icons/gr'

// // // const Navbar = () => {
// // //     const [ismenu,setismenu]=useState(false);
// // //     const [isnav,setisnev]=useState('sm:z-[-1] md:z-[1] md:z-auto md:static absolute md:static absolute');



// // //     const handleclick=()=>{
// // //        setismenu(ismenu => !ismenu)
// // //        if(ismenu){
// // //         setisnev('sm:z-[-1]  md:z-auto md:static absolute sm:mt-5 md:static absolute')
// // //        }
// // //        else{
// // //         setisnev('')
// // //        }
// // //     }

// // //     console.log(ismenu)
// // //     return (<>


// // //         <div className="bg-blue-600 text-white md:flex md:items-center md:justify-around relative navbar-tranistion">
// // //             <div className="flex sm:flex-col  p-5 md:mt-4 sm:mt-4 md:py-4    
// // //                md:flex-row md:justify-between md:items-center  ">
// // //                 <div className='md:flex-shrink-0 flex items-center'>
// // //                     <img src='Company Logo.svg' alt='Companys logo' />
// // //                     <button className='sm:flex md:hidden absolute right-10 m-1 text-2xl' onClick={handleclick}> 
// // //                     {ismenu ? <GrClose />:<FiMenu />} </button>


// // //                 </div>


// // //                 <div className={`text-lg  flex justify-start md:mx-20  md:flex-shrink-0  ${isnav}`}>

// // //                     <div className='flex sm:flex-col sm:justify-start md:justify-center md:flex-row mt-5 md:m-0' >
// // //                         <div><button className='mx-2 sm:my-1 '> Home </button> </div>
// // //                         <div><button className='mx-2 sm:my-1'> Our Products </button> </div>
// // //                         <div><button className='mx-2 sm:my-1'> Resources </button> </div>
// // //                         <div><button className='mx-2 sm:my-1'> Contacts </button> </div>
// // //                     </div>
// // //                 </div>

// // //             </div>

// // //             <div className={`text-xl  md:flex-shrink-0 flex justify-end ${isnav}   `}>
// // //                 <button className={`sm:m-3 md:m-1 bg-green-500  py-3 px-3 rounded`}>Log in </button>
// // //                 <button className={`sm:m-3 md:m-1  bg-blue-500 py-3 px-3 rounded`}>Sign up</button>
// // //             </div>

// // //         </div>
// // //         <div class="border-t border-gray-300 mt-0"></div>


// // //         </>
// // //     );
// // // }

// // // export default Navbar



// // import React, { useState } from 'react';
// // import { FiMenu } from 'react-icons/fi';
// // import { GrClose } from 'react-icons/gr';

// // const Navbar = () => {
// //   const [ismenu, setismenu] = useState(false);

// //   const handleMenuClick = () => {
// //     setismenu((prev) => !prev);
// //   };

// //   return (
// //     <>
// //       <div className="bg-blue-600 text-white relative">
// //         <div className="flex p-5 md:mt-4 md:py-4 md:flex-row md:justify-between md:items-center">
// //           <div className="md:flex-shrink-0 flex items-center">
// //             <img src="Company Logo.svg" alt="Companys logo" />
// //             <button
// //               className="sm:flex md:hidden absolute right-10 m-1 text-2xl"
// //               onClick={handleMenuClick}
// //             >
// //               {ismenu ? <GrClose /> : <FiMenu />}
// //             </button>
// //           </div>

// //           <div
// //             className={`text-lg flex justify-start md:mx-20 md:flex-shrink-0 ${
// //               ismenu ? 'block' : 'hidden md:flex'
// //             }`}
// //           >
// //             <div className="flex sm:flex-col sm:justify-start md:justify-center md:flex-row mt-5 md:m-0">
// //               <div>
// //                 <button className="mx-2 sm:my-1"> Home </button>
// //               </div>
// //               <div>
// //                 <button className="mx-2 sm:my-1"> Our Products </button>
// //               </div>
// //               <div>
// //                 <button className="mx-2 sm:my-1"> Resources </button>
// //               </div>
// //               <div>
// //                 <button className="mx-2 sm:my-1"> Contacts </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div
// //           className={`text-xl md:flex-shrink-0 flex justify-end ${
// //             ismenu ? 'block' : 'hidden md:flex'
// //           }`}
// //         >
// //           <button className="sm:m-3 md:m-1 bg-green-500 py-3 px-3 rounded">
// //             Log in
// //           </button>
// //           <button className="sm:m-3 md:m-1 bg-blue-500 py-3 px-3 rounded">
// //             Sign up
// //           </button>
// //         </div>
// //       </div>
// //       <div className="border-t border-gray-300 mt-0"></div>
// //     </>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from 'react';
// import { FiMenu } from 'react-icons/fi';
// import { GrClose } from 'react-icons/gr';

// const Navbar = () => {
//   const [ismenu, setismenu] = useState(false);

//   const handleMenuClick = () => {
//     setismenu((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="bg-blue-600 text-white relative">
//         <div className="flex p-5 md:mt-4 md:py-4 md:flex-row md:justify-between md:items-center">
//           <div className="md:flex-shrink-0 flex items-center">
//             <img src="Company Logo.svg" alt="Companys logo" />
//             <button
//               className="sm:flex md:hidden absolute right-10 m-1 text-2xl"
//               onClick={handleMenuClick}
//             >
//               {ismenu ? <GrClose /> : <FiMenu />}
//             </button>
//           </div>

//           <div
//             className={`text-lg md:mx-20 md:flex-shrink-0 ${
//               ismenu ? 'block' : 'hidden md:flex'
//             }`}
//           >
//             <div
//               className={`${
//                 ismenu ? 'flex-col sm:mt-5 sm:mb-3' : 'sm:flex-col sm:mt-5'
//               }`}
//             >
//               <div>
//                 <button className="mx-2 sm:my-1"> Home </button>
//               </div>
//               <div>
//                 <button className="mx-2 sm:my-1"> Our Products </button>
//               </div>
//               <div>
//                 <button className="mx-2 sm:my-1"> Resources </button>
//               </div>
//               <div>
//                 <button className="mx-2 sm:my-1"> Contacts </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className={`text-xl md:flex-shrink-0 flex justify-end ${
//             ismenu ? 'block' : 'hidden md:flex'
//           }`}
//         >
//           <button className="sm:m-3 md:m-1 bg-green-500 py-3 px-3 rounded">
//             Log in
//           </button>
//           <button className="sm:m-3 md:m-1 bg-blue-500 py-3 px-3 rounded">
//             Sign up
//           </button>
//         </div>
//       </div>
//       <div className="border-t border-gray-300 mt-0"></div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
    const [ismenu, setismenu] = useState(false);

    const handleMenuClick = () => {
        setismenu((prev) => !prev);
    };

    return (
        <>
            <div className="bg-[#2B63D9] text-white relative md:flex md:justify-between">
                <div className="flex sm:flex-col p-5  md:py-3 md:flex-row md:items-center">
                    <div className="md:flex-shrink-0 flex items-center lg:mx-10">
                        <img src="Company Logo.svg" alt="Companys logo" />
                        <button
                            className="sm:flex md:hidden absolute right-10 m-1 text-2xl"
                            onClick={handleMenuClick}
                        >
                            {ismenu ? <GrClose /> : <FiMenu />}
                        </button>
                    </div>

                    <div
                        className={`text-lg md:flex-shrink-0  lg:mx-10 ${ismenu ? '' : 'hidden md:flex flex-row'
                            }`}
                    >
                        <div
                            className={`${ismenu ? 'flex sm:flex-col  sm:mt-3' : 'flex md:flex-row md:mt-0 md:mx-5'}`} >
                            <div>
                                <button className="mx-2 sm:my-1"> Home </button>
                            </div>
                            <div>
                                <button className="mx-2 sm:my-1"> Our Products </button>
                            </div>
                            <div>
                                <button className="mx-2 sm:my-1"> Resources </button>
                            </div>
                            <div>
                                <button className="mx-2 sm:my-1"> Contacts </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`text-lg flex md:flex-shrink-0 px-3  sm:justify-start mx-3  lg:mx-10 ${ismenu ? 'flex' : 'sm:hidden md:flex'
                        }`}
                >
                    <button className="sm:my-3 mx-1 bg-white-500 px-3 rounded">
                        Log in
                    </button>
                    <button className="my-3 mx-1 bg-blue-500 sm:py-3 px-3 md:py-0 rounded">
                        Sign up
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-0"></div>
        </>
    );
};

export default Navbar;
