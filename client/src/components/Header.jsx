import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { FaSearch,FaUser } from "react-icons/fa";


const Header = () => {

const[menuOpened, setMenuOpened]=useState(false)
const[dropdownMenu, setDropdownMenu]=useState(false)
const navigate=useNavigate()

const toggleMenu=()=>{
  setMenuOpened(!menuOpened)
}

  return (
<header className='max-padd-container flexBetween rounded-xl py-4  '>

<Link to={'/'} className='bold-24' >
<div>
  Lease <span className='text-secondary'>lodge</span>
</div>


</Link>
<div className='bg-white ring-slate-900/5 rounded-full p-2 px-4 w-44  sm:w-96 flexBetween gap-x-2 relative  '>
<input type='text' 
placeholder='Seacrch here...'
className='outline-none border-none w-full bg-white'
    />
<button className=' absolute right-0 h-full w-10 rounded-full bg-secondary text-white flexCenter cursor-pointer '> <FaSearch  /> </button>

</div>
<div>

  <div>
    <div>
        <FaUser/>
  </div>
  </div>
  
</div>


</header>
  )
}

export default Header