import React from 'react'
import Header from "../components/Header"





const Register = () => {
  return (
    <div className='max-padd-container w-screen h-screen overflow-hidden '>
      
      <Header/>

     <div className=' bg-white flexCenter mt-2  rounded-md border w-80 ml-[461px]'>
      <div className=' flex flex-col mb-4'>

       <h1 className='bold-22 mt-4 ml-10'>Sign Up </h1>
       <form action="" className=' mx-10'>
        <input type="text" placeholder='First Name' className='border bg-gray-10 rounded-md p-1 pl-3 mt-6'/>
        <input type="text" placeholder='Last Name' className='border bg-gray-10 rounded-md p-1 pl-3 mt-5'/>
        <input type="Email" placeholder='Email Address' className='border bg-gray-10 rounded-md p-1 pl-3 mt-5'/>
        <input type="Password" placeholder='Password' className='border bg-gray-10 rounded-md p-1 pl-3 mt-5'/>
        <input type="Password" placeholder='Confirm Password ' className='border bg-gray-10 rounded-md p-1 pl-3 mt-5'/>
 <div className="mt-5">
    <label
      htmlFor="file-upload"
      className="block text-sm font-medium text-gray-700"
    >
      Upload Profile Picture
    </label>
    <input
      type="file"
      id="file-upload"
      className="border bg-gray-50 rounded-md p-1 pl-3 mt-2 w-full"
    />
  </div>
       </form>
       <button className=' btn-secondary mx-10 mt-6 rounded-md '>Register</button>
       <h6 className='mx-9 mt-4'>Already have an account ?  <a href="/login" className='text-violet-500'>Login</a>    </h6>
</div>

     </div>
      
      
      </div>
  )
}

export default Register