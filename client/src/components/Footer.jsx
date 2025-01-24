import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 bg-black  rounded-t-2xl mx-12 mt-20 px-10 pt-10 pb-3 gap-4 '>
      <div className=' flex flex-col  '>
        <h1 className=' text-white bold-18'>Lease <span className=' text-violet-400'>lodge</span> </h1>
        <p className=' mt-4'>Find your perfect home or investment property with us . we offer a seamiess, trusted real estate experience . </p>
        <p className='mt-2'>@ 2024 Leaselodge . All right reseved.</p>
        <p className='mt-2 '>MADE BY  : <span className='text-violet-400'> Mohamad Masri</span></p>

        </div>
      <div className=' flex flex-col'>
        <h1 className=' text-white bold-18'>Quick links </h1>
        <ul className=' mt-4 '>
          <li className='pb-2  text-stone-400'>About Us</li>
          <li className='pb-2  text-stone-400'>Properties</li>
          <li className='pb-2  text-stone-400'>Services</li>
          <li className='pb-2  text-stone-400'>Contact </li>
          <li className='pb-2  text-stone-400'>Privacy Policy </li>
        </ul>
      </div>
      <div className=' flex flex-col'>
        <h1 className=' text-white bold-18'>Contact us</h1>
        <div className=' mt-4 '>
          <p className='flex gap-2 text-white pb-4'>
            <div><IoCall /></div>
            <p>+9617190157</p>
          </p>
          <p  className='flex gap-2 text-white pb-4 '>
            <div><MdEmail /></div>
            <p>Support@Realestate.com</p>
          </p>
          <p  className='flex gap-2 text-white '>
            <div><FaLocationDot /></div>
            <p>123 Real Estate Avenue , suite 100, New York ,Ny</p>
          </p>
        </div>
      </div>
      <div className=' flex flex-col'>
        <h1 className=' text-white bold-18'>Follow Us</h1>
        <div className='flex text-white mt-4 gap-4 '>
          <div><FaInstagram /></div>
          <div><FaFacebook /></div>
          <div><FaLinkedin /></div>
          <div><FaXTwitter /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer