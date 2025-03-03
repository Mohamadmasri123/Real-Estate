import React, { useState } from 'react'
import Header from "../components/Header"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate =useNavigate()

const handleSubmit =async (e)=>{
  e.preventDefault()
  try{

  }catch(err){

  }
}

  return (
    
    <div className="max-padd-container w-screen h-screen overflow-hidden ">
    <Header />

    <div className=" bg-white flexCenter mt-2  rounded-md border w-80 ml-[461px]">
      <div className=" flex flex-col mb-4">
        <h1 className="bold-22 mt-4 ml-10">Login  </h1>
        <form onSubmit={handleSubmit} action="" className=" mx-10">
          <input
            type="text"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email Address"
            value={email}
            className="border bg-gray-10 rounded-md p-1 pl-3 mt-6"
            required
          />
          <input
            type="text"
            name='password'
            placeholder="Password"
            value={password}
            className="border bg-gray-10 rounded-md p-1 pl-3 mt-5"
          />

        <button type='submit' className=" btn-secondary mx-10 mt-6 rounded-md ">Log in</button>
        </form>

        <div className="mx-7 mt-4">
          Don't have an account ?{" "}
          <Link to={"/register"} className="text-violet-500">     Register</Link> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login