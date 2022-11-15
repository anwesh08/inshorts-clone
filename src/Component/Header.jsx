import React, { } from 'react'

export default function Header({ navbarOpen, setNavbarOpen }) {
   return (
      <>
         <div className="flex flex-row px-4 shadow-md shadow-slate-600 py-2 w-full" id='outer-container'>
            {/* Hamburger Menu */}
            <div className="flex items-start">
               <button
                  className="flex top-0 left-0 z-20 relative w-10 h-10 text-black focus:outline-none w-1/4"
                  onClick={() => setNavbarOpen(!navbarOpen)}
               >
                  <div className="absolute w-5 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                     <span
                        className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200 bg-white" : "-translate-y-1.5 bg-black"
                           }`}
                     ></span>
                     <span
                        className={`absolute h-0.5 transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100 bg-black"
                           }`}
                     ></span>
                     <span
                        className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200 bg-white" : "translate-y-1.5 bg-black"
                           }`}
                     ></span>
                  </div>
               </button>
            </div>
            {/* Inshort Image */}
            <div className="flex items-center mx-auto" id='page-wrap'>
               <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" className='h-14 cursor-pointer' />
            </div>
         </div>
      </>
   )
}
