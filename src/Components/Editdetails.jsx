import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon1 from '/assets/Avatars.png';
import Search_Icon from '/assets/search.png';
import Bell_Icon from '/assets/bell (1).png';
import Special_Icon from '/assets/secondary.png';

const Editdetails = () => {
  return (
    <div className="flex h-screen overflow-hidden">
          <div className="bg-gray-900 h-full p-5 pt-8 w-60 relative overflow-y-auto">
            <div className="flex gap-2">
              <img src={Header_Logo} alt="Logo" className="h-9 w-10 mt-2" />
              <p className="text-lg font-semibold text-white pb-8">Deeper Christaian  Life Ministry</p>
            </div>
    
            <br />
            <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
              <img
                src={Home_Icon}
                alt="Key"
                className="h-5 w-5 mb-6 filter brightness-0 invert"
              />
              <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Dashboard</p>
            </div>
            <div className="flex gap-4 cursor-pointerflex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
              <img
                src={Community_Icon}
                alt="Key"
                className="h-5 w-5 mb-6 filter brightness-0 invert"
              />
              <p className="text-white text-2xl cursor-pointer pytext-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal-2">Accounts</p>
            </div>
            <div className="flex gap-4 cursor-pointerflex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
              <img
                src={Cube_Icon}
                alt="Key"
                className="h-5 w-5 mb-6 filter brightness-0 invert"
              />
              <p className="text-white text-2xl cursor-pointer pytext-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal-2">Module</p>
            </div>
            <div className="flex gap-4 mt-70 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
              <img src={Headphone_Icon} alt="Key" className="h-5 w-5 mb-6" />
              <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Support</p>
            </div>
            <div className="flex gap-4 cursor-pointer  hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
              <img src={Cog_Icon} alt="Key" className="h-5 w-5 mb-6" />
              <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Settings</p>
            </div>
            <div className="flex gap-4">
              <img
                src={Profile_Icon1}
                alt="Key"
                className="h-10 w-10 rounded-full object-cover mb-"
              />
              <p className="text-white h-10 w-10 font-semibold py-0.5">
                Samuel Ayomi <br /> <span className="h-5 w-5">@samuelayomi</span>
              </p>
            </div>
          </div>
          {/*the second side*/}
          <div className="flex-1 p-7 overflow-y-auto">
            <div>
              <img
                src={Bell_Icon}
                alt=""
                className="absolute right-30 h-6 w-6 cursor-pointer bg-gray-100 rounded-full"
              />
            </div>
            <div>
              <img
                src={Profile_Icon1}
                alt=""
                className="absolute right-15 h-8 w-8 cursor-pointer bg-gray-100 rounded-full"
              />
            </div>
    
            <div className="relative w-2xl ">
              <img
                src={Search_Icon}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search here"
                className="w-full h-10 px-10 py-2 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <br />
            <div>
              <p className="bg-gray-200 cursor-pointer border border-gray-200 p-4 w-96 mt-4 rounded-lg text-gray-500 text-xl">
                <Link to="/accounts">Back</Link> |{' '}
                <span className="text-blue-700 space-x-2">Accounts</span> / Create
                Accounts
              </p>
            </div><br />
    <div className="w-full min-h-screen bg-white border border-gray-200  rounded-lg p-4">
      <div className="grid grid-cols-2 gap-12 h-full mt-6 items-start gap-12">
        {/* Left Side - Profile and First 3 Inputs with Selects */}
        <div className="flex flex-col space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <img className="w-30" src={Profile_Icon1} alt="Profile" />
            <div>
              <h1 className="font-medium text-base leading-normal">Profile picture</h1>
              <br />
              <p className="text-sm antialiased">
                This image will be displayed on your profile
              </p>
              <br />
              <img src={Special_Icon} alt="Special" className="w-40 " />
            </div>
          </div>
    
          {/* First 3 Inputs */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-[600px] h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Second Name
            </label>
            <input
              type="text"
              placeholder="Enter second name"
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Second Name
            </label>
            <input
              type="text"
              placeholder="Enter second name"
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              User Type
            </label>
            <select
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled selected>Select</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              User Sub Type
            </label>
            <select
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled selected>Select</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Access to
            </label>
            <select
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled selected>Select</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
    
        {/* Right Side - Remaining Inputs and Buttons */}
        <div className="flex flex-col space-y-6 mt-37.5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full h-[56px] rounded-[8px] rotate-0 opacity-100 border border-gray-300 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
         <div className="relative w-full">
      <div className="flex space-x-4 mt-63.5 absolute right-0">
        <button className="w-30 h-12 rounded-lg border border-gray-400"onClick={() => navigate('/accounts')}>Cancel</button>
        <button className="w-40 h-12 text-white bg-blue-800 border border-gray-400 rounded-lg" onClick={() => navigate('/personalinfo')}>
          Create Account
        </button>
      </div>
    </div>
        </div>
      </div>
    </div>          </div>
            </div>
          
         
        
  )
}

export default Editdetails
