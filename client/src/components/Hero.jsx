import React from 'react'
import { FaPlus } from "react-icons/fa6";
import side1 from '../assets/sideImg.png'
import side2 from '../assets/sideImg1.png'
import side3 from '../assets/sideImg2.png'
import circel1 from '../assets/person-1.jpg'
import circel2 from '../assets/person-2.jpg'
import circel3 from '../assets/circle.png'
import { Link } from 'react-router-dom';





const Hero = () => {
  return (
<section className='max-padd-container mt-16 xl:mt-10'>
{/* parent */}
<div className='flex flex-col xl:flex-row gap-16 '>

{/* chiled left */}
 <div className='flex flex-col justify-center flex-1 gap-y-8 xl:max-w-[555px] relative'>

<h1 className='h1'>Invest in <span className=' text-secondary' > Your Future </span>With Confidence   </h1>
<p>A real estate website serves as a comprehensive platform for property buyers, 
    sellers, and renters to explore opportunities with ease.
     It offers detailed property listings, complete with photos,
      descriptions, and pricing, while enabling users to filter their searches based on location,
       budget, and preferences. Additionally, features like virtual tours, mortgage calculators,
        and contact options with agents streamline the decision-making process.
         Whether you're searching for your dream home or an investment opportunity,
          a well-designed real estate website simplifies
           the journey and connects you with the right property in just a few clicks. </p>
<div className='flex gap-3 '>
    <a href='#listing' className='btn-dark rounded-full flexCenter'>Explore Properites</a>
    <Link to={" "} className='flex flexCenter btn-secondary rounded-full '>
        <span className='pr-1'><FaPlus /></span>
        Add Property
    </Link>
</div>
<div className='flex '>
 <img src={circel3} alt="" className='rounded-full h-[99px] z-30'/>
<img src={circel1} alt=""  className='rounded-full h-[80px]  shadow-sm absolute left-16 z-20'/>
 <img src={circel2} alt="" className='rounded-full h-[80px] shadow-sm absolute left-32 z-10'/>
</div>
 </div>
{/* chiled right */}
 <div className='flex flex-col flex-1 gap-4'>

 <div className='rounded-2xl h-[266px] overflow-hidden'><img className='rounded-xl object-cover' src={side1} alt="" /></div>
 <div className='flexBetween  gap-4'>
 <div className='flex flex-1 rounded-xl' ><img src={side2} alt="" className='rounded-xl object-cover aspect-square' /></div>
 <div className='flex flex-1  rounded-xl' ><img src={side3} alt="" className='rounded-xl object-cover aspect-square' /></div>
</div>
 </div>




</div>






</section> 
 )
}

export default Hero