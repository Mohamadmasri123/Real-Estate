import React from 'react'
import { PiChatsBold } from "react-icons/pi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";


const Features = () => {
  return (

  <section>
    <div className='max-padd-container mt-10'>
      <h7 className='flexCenter'>
        Few Steps To Your New Home 
      </h7>
      <h1 className='flexCenter h3'>
        This Is How Easy It Can Be 
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        <div className='flex flex-col border-none bg-white rounded-3xl gap-2 p-4 m-4 '>
        <PiChatsBold size={25} className='text-secondary'/>
          <h1>Answer Question </h1>
          <p>Provide a clear and concise response to the inquiry presented.</p>
        </div>
        <div className='flex flex-col border-none bg-white rounded-3xl gap-2 p-4 m-4'>
        <MdOutlineLibraryAddCheck size={25} className='text-yellow-500' />
        <h1>Select Property </h1>
        <p>Choose the desired property from the available options.</p>
        </div>
        <div className='flex flex-col border-none bg-white rounded-3xl gap-2 p-4 m-4'>
        <GrCertificate size={25} className='text-red-500' />
        <h1>Enjoy Linving </h1>
        <p>Enjoy living by embracing each moment, finding joy in the little things, and creating a life filled with purpose and happiness.</p>
        </div>
      </div>
    </div>


  </section>
  )
}

export default Features