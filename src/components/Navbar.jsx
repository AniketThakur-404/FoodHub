import React from "react";
import Logo from "../assets/Logo2.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className=' shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'> 
      <div className='container py-3 sm:py-0 '>
        <div className="flex justify-between items-center">
            <div className="">
                
                <a href="#" className='flex
                 gap-2 items-center text-2xl sm:text-3xl font-bold'>
                    <img src={Logo} alt="Foodie-Hub" className='w-17 h-10 rounded-xl' />
                    <div>
                    <span className=' rounded-lg hover:bg-black hover:text-white'>Food</span><span className=' rounded-lg text-primary hover:bg-primary hover:text-black' >hub</span>
                    </div>
                </a> 
                
            </div>
            <div className='flex items-center gap-4'>
              <div >
                <DarkMode/>
              </div>
                <ul className="hidden sm:flex items-center gap-4">
                    <li>
                        <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                    </li>
                    <li>
                        <a href="#"
                        className='inline-block py-4 px-4 hover:text-primary'>About</a>
                    </li>
                    <li>
                        <a href="#"
                        className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                    </li>
                </ul>
               <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
