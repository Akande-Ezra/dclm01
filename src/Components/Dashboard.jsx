import React from 'react'
import Header_Logo from '../assets/church_logo-1.png';
import Home_Icon from '../assets/home-alt-2.png'
import Cube_Icon from '../assets/cube.png'
import Community_Icon from '../assets/community.png'
import Cog_Icon from '../assets/cog.png'
import Headphone_Icon from '../assets/headphone-mic.png'
import Profile_Icon from '../assets/profile.png'
import Search_Icon from '../assets/search.png'
import Bell_Icon from '../assets/bell (1).png'
const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='bg-gray-900 h-screen p-5 pt-8 w-90 relative'>

<div className='flex gap-4'>
<img src={Header_Logo} alt="Logo" className="h-14 w-auto " />
<p className='text-xl font-semibold text-white pb-8'>Deeper Christaian Life Ministry </p>
</div>

<br />
<div className='flex gap-4'> 
  <img src={Home_Icon} alt="Key" className="h-10 mb-6 filter brightness-0 invert" />
  <p className='text-white text-2xl py-2'>Dashboard</p>
</div>
<div className='flex gap-4'> 
  <img src={Community_Icon} alt="Key" className="h-10 mb-6 filter brightness-0 invert" />
  <p className='text-white text-2xl py-2'>Accounts</p>
</div>
<div className='flex gap-4'> 
  <img src={Cube_Icon} alt="Key" className="h-10 mb-6 filter brightness-0 invert" />
  <p className='text-white text-2xl py-2'>Module</p>
</div>
<div className='flex gap-4 mt-100'> 
  <img src={Headphone_Icon} alt="Key" className="h-10 mb-6 " />
  <p className='text-white text-2xl py-1'>Support</p>
</div>
<div className='flex gap-4 '> 
  <img src={Cog_Icon} alt="Key" className="h-10 mb-6 " />
  <p className='text-white text-2xl py-1'>Settings</p>
</div>
<div className='flex gap-4 '> 
  <img src={Profile_Icon} alt="Key" className="h-12 w-15 rounded-full object-cover mb- " />
  <p className='text-white text-2xl py-1'>Samuel Ayomi <br /> <span className='text-xl'>@samuelayomi</span> </p>
</div>
{/*second section*/}
      </div>
      <div className='p-7'>
      <div>
   <img src={Bell_Icon} alt=""  className="absolute right-30  h-10 w-10  cursor-pointer"/>
</div> 
<div>
   <img src={Profile_Icon} alt=""  className="absolute right-10 h-12 w-12  cursor-pointer"/>
</div>

<div className="relative w-2xl">
  <img src={Search_Icon}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
  /> 
  <input
    type="text"
    placeholder="Search here"
    className="w-full h-10 px-10 py-2 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
  />
</div>
 <div><br /><br /><br />
  <h1 className='text-2xl font-bold '>Welcome back, David</h1>
  <p>Track and manage all information  of users accounts</p>
 </div>
      </div>
    </div>
  )
}

export default Dashboard
