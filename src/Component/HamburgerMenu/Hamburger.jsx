import React from 'react';

const Hamburger = ({ navbarOpen, setNavbarOpen, setCategory }) => {
   return (
      <nav
         className={`fixed flex top-0 left-0 w-1/5 p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
      >
         <ul className="flex flex-col items-start">
            <header className='text-xl font-bold py-5'>Category</header>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("business");
                     setNavbarOpen(false);
                  }}
               >
                  Business
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("entertainment");
                     setNavbarOpen(false);
                  }}
               >
                  Entertainment
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("general");
                     setNavbarOpen(false);
                  }}
               >
                  General
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("health");
                     setNavbarOpen(false);
                  }}
               >
                  Health
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("science");
                     setNavbarOpen(false);
                  }}
               >
                  Science
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("sports");
                     setNavbarOpen(false);
                  }}
               >
                  Sports
               </a>
            </li>
            <li className="nav-li py-2">
               <a
                  href="/"
                  className="nav-link"
                  onClick={() => {
                     setCategory("technology");
                     setNavbarOpen(false);
                  }}
               >
                  Technology
               </a>
            </li>
         </ul>
      </nav>
   );
}

export default Hamburger;
