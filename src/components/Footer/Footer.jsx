import React from 'react'
import Logo from "../../assets/Logo2.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";
const Footer = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
        <section className="max-w-[1200px] mx-auto">
          <div className=" grid md:grid-cols-3 py-5">
            <div className=" py-8 px-4 ">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={Logo} alt="Logo" className="max-w-[50px] rounded-xl" />
                Foodhub
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Possimus, voluptate.{" "}
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>New Delhi, Delhi</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Login</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Login</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  {/* <ul className="list-disc list-inside"> */}
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer">Download</li>
                    <li className="cursor-pointer">FAQ</li>
                    <li className="cursor-pointer">Careers</li>
                    <li className="cursor-pointer">Affiliates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
              @copyright 2024 All rights reserved || Made with ❤️ by Aniket
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Footer;
