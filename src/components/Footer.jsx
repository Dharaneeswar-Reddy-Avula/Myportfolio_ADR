import React from 'react'
import { MdWifiCalling3 } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#02050a] font-poppins md:px-[90px]'>
      <footer className=" text-white py-12">
  <div className="max-w-7xl mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 py-[60px]">
    
    <div className="flex items-start space-x-4">
      <div className="bg-green-400 text-black rounded-full p-4 text-4xl">
       <FaMapLocationDot />
      </div>
      <div>
        <h4 className="text-lg font-bold mb-3">Address</h4>
        <p className='text-[#A2A2A2] font-poppins'>E.Ramapuram,<br />Kalasapadu (M), <br />Kadapa (D), <br />AndhraPradesh,<br />516217</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <div className="bg-green-400 text-black rounded-full p-4 text-4xl">
       <MdWifiCalling3 />
      </div>
      <div>
        <h4 className="text-lg font-bold mb-3">Lets talk us</h4>
        <p className='text-[#A2A2A2]'>+91 8790756930</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <div className="bg-green-400 text-black rounded-full p-4 text-4xl">
     <MdMarkEmailUnread />
      </div>
  <div className=''>
  <h4 className="text-lg font-bold mb-3">Send us email</h4>
  <p className='text-[#A2A2A2] break-words text-md '>avuladharaniswarreddy <br className='md:hidden'/> @gmail.com</p>
</div>

    </div>
  </div>

  <div className="border-t border-gray-700 my-8 mx-6"></div>

  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
    <p>© Dharaneeswar Reddy Avula 2025 | All Rights Reserved</p>
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Terms & Conditions</a>
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Sitemap</a>
    </div>
    <div className="mt-4 md:mt-0">
   <a href="#">  <button className="text-white border border-gray-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
      </a> 
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer