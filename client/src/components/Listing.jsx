import React from 'react'
// import { BiWorld } from "react-icons/bi";
// import { MdOutlineHomeWork } from "react-icons/md";
// import { TbBeach } from "react-icons/tb";
// import { GiFarmer } from "react-icons/gi";
// import { CiMountain1 } from "react-icons/ci";
// import { GiDesert } from "react-icons/gi";
// import { PiIslandBold } from "react-icons/pi";
// import { FaSkiing } from "react-icons/fa";
// import { LiaSwimmingPoolSolid } from "react-icons/lia";
// import { GiBoatFishing } from "react-icons/gi";
import {categories} from '../assets/data.jsx'


const Listing = () => {
  return (
  <section>
    <div className='max-padd-container mt-10 mb-10   '>
      <h7 className='flexCenter'>
        From Concept to Reality
      </h7>
      <h1 className='flexCenter h3'>
        Discover Our Newest Listings
      </h1>
     <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 bg-white rounded-full p-5 px-16 ring-1 shadow-sm overflow-auto hide-scrollbar  '>
        {
          categories.map((category)=>(
            <div key={category.id} className='flexCenter flex-col  '>
            <div className='  p-2 rounded-full mb-1  ' style={{ backgroundColor: category.color }}>{category.icon}</div>  
             <h1 className='medium-14'>{category.label}</h1>
           </div>
        ))
        }
     </div>
    </div>
  </section>
  )
}

export default Listing