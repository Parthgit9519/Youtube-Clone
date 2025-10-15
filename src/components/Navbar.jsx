import React, { useContext } from 'react';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { MdOutlineMic } from "react-icons/md";
import { MyContext } from '../context/ContextData';

const Navbar = () => {

   const { searchBar, handleSearch } = useContext(MyContext)

   return (
      <div className="bg-white shadow-sm sticky top-0 z-50">
         <div className="max-w-8xl mx-auto px-2 sm:px-4 py-2">
            <div className="flex items-center justify-between">
               <div className="flex-shrink-0">
                  <img
                     src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                     alt="YouTube Logo"
                     className="h-6 sm:h-8"
                  />
               </div>

               <div className="hidden md:flex flex-grow justify-center px-4">
                  <div className="flex w-full max-w-xl">
                     <input
                        onChange={handleSearch}
                        value={searchBar}
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
                     />
                     <button className="bg-gray-100 border border-l-0 border-gray-300 px-4 rounded-r-full flex items-center">
                        <AiOutlineSearch className="h-5 w-5 text-gray-600 " />
                     </button>

                  </div>
                  <button className="ml-2 p-2 rounded-full hover:bg-gray-100">
                     <MdOutlineMic className="h-6 w-6 text-gray-600" />
                  </button>
               </div>

               <div className="flex items-center gap-2 sm:gap-4">

                  <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
                     <AiOutlineSearch className="h-6 w-6 text-gray-600" />
                  </button>

                  <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
                     <MdOutlineMic className="h-6 w-6 text-gray-600" />
                  </button>

                  <button className="hidden lg:flex items-center space-x-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition">
                     <span className="text-lg font-semibold">+</span>
                     <span>Create</span>
                  </button>

                  <button className="p-2 hover:bg-gray-100 rounded-full">
                     <AiOutlineBell className="h-6 w-6 text-gray-600" />
                  </button>

                  <button className="px-3 sm:px-4 py-1 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition text-sm sm:text-base">
                     Sign Up
                  </button>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Navbar;
