import React from 'react';

const Hamburger = ({ navbarOpen, setNavbarOpen }) => {
   return (
      <nav
         className={`fixed flex top-0 left-0 w-1/5 p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
      >
         <ul className="flex flex-col items-start">
            <li className="nav-li">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setNavbarOpen(false);
                  }}
               >
                  Home
               </a>
            </li>
            <li className="nav-li">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setNavbarOpen(false);
                  }}
               >
                  About
               </a>
            </li>
         </ul>
      </nav>
   );
}

export default Hamburger;
