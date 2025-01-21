import React from 'react'
import img from "../assets/about.png"
import { LiaCheckCircleSolid } from "react-icons/lia";


const About = () => {
  return (
    <div className=' max-padd-container  gap-44 grid  grid-cols-1 sm:grid-col-2 md:grid-cols-2 xl:grid-cols-2 ml-0 sm:ml-20 xl:ml-20'>
        <div className=' ' ><img src={img} alt="" className='h-[370px]' /></div>
        <div className='flex flex-col justify-center ' >
                <div><h7 className=''>From Concept to Reality</h7>
                <h1 className=' h3'>Discover Our Newest Listings</h1></div>

                <ul >
                    <li className='flex items-center pt-4  '> 
                       <div> <LiaCheckCircleSolid  /> </div>
                        <p className='pl-2 '> Access exclusive property listings </p>
                    </li>
                    <li className='flex pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Expert advice from local real estate professionals </p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Find your dream home in prime locations</p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Seamlessonline property search experience  </p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Get personalized property recommendations  </p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> 24/7 customer support for all your inquiries  </p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Transparent and hassle-free transactions </p>
                    </li>
                    <li className='flex items-center pt-4'> 
                        <LiaCheckCircleSolid /> 
                        <p className='pl-2'> Comprehensive market  analysis and report  </p>
                    </li>
                </ul>
              </div>
   
       
      
    </div>
  )
}

export default About
