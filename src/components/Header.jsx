import React, { useContext, useEffect, useState } from 'react'
import logo1 from '../assets/Images/logo1.png';
import { CiSearch } from "react-icons/ci";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from '../Context/themeContext';


function Header() {
  const[toggle,setToggle] = useState(false)
 const {theme,setTheme}= useContext(ThemeContext)
 useEffect(()=>{

 },[])
  return (
    <div className='flex items-center p-3'>
      <img src={logo1} alt="app logo" width = {85} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
      <CiSearch />
     <input type="text" className='outline-none bg-transparent px-2  w-full' placeholder='search Games ' />
      </div>

      <div>
        {theme === 'light'?  <HiMoon onClick={()=>{setTheme('dark') ;localStorage.setItem('theme','dark')}}className='text-[35px] p-1 text-black rounded-full bg-slate-200 cursor-pointer'/>:  <HiSun  onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}} className='text-[35px] p-1 text-black rounded-full bg-slate-200 cursor-pointer'/>}
     
      </div>
    
    </div>
  )
}

export default Header