import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon1 from '/assets/Avatars.png';
import Search_Icon from '/assets/search.png';
import Bell_Icon from '/assets/bell (1).png';
import Calendar_Icon from '/assets/calendar.png';
import User_Icon from '/assets/user-circle.png';

const Dashboard = () => {
const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-900 h-full p-5 pt-8 w-60 relative overflow-y-auto">
        <div className="flex gap-4">
          <img src={Header_Logo} alt="Logo" className="h-9 w-10 mt-2 " />
          <p className="text-lg font-semibold text-white font-inter pb-8">Deeper Christian  <br />Life Ministry</p>
        </div>

        <br />
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Home_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal ">Dashboard</p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Community_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p className=" text-white font-semibold cursor-pointer py-0.5 font-Inter font-normal text-[14px] leading-[1.45] tracking-normal" onClick={() => navigate('/accounts')} >Accounts</p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Cube_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p className="text-white font-semibold py-0.5 font-Inter font-normal text-[14px] leading-[1.45] tracking-normal">Module</p>
        </div>
        <div className="flex gap-4 mt-70 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img src={Headphone_Icon} alt="Key" className="h-5 w-5 mb-6" />
          <p className="text-white py-0.5 font-Inter font-normal text-[14px] leading-[1.45] tracking-normal">Support</p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 hover:bg-gray transition duration-300 ease-in-out">
          <img src={Cog_Icon} alt="Key" className="h-5 2-5 mb-6" />
          <p className="text-white py-0.5 font-Inter font-normal text-[14px] leading-[1.45] tracking-normal">Settings</p>
        </div>
        <div className="flex gap-4">
          <img
            src={Profile_Icon1}
            alt="Key"
            className="h-10 w-10 rounded-full object-cover mb-"
          />
          <p className="text-white h-10 w-10 font-semibold py-0.5 ">
            Samuel Ayomi <br /> <span className="h-5 w-5 font-normal">@samuelayomi</span>
          </p>
        </div>
      </div>
      {/*the second side*/}
      <div className="flex-1 p-7 overflow-y-auto">
        <div className='position-relative'>
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
        <div className="flex items-center space-x-180 w-full px- py-16">
          <div>
            <h1 className="text-4xl font-bold">Welcome back, David</h1>
            <p className="text-gray-500 text-lg">
              Track and manage all information of users accounts
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 w-55 h-16 flex items-center justify-center bg-white">
            <img
              src={Calendar_Icon}
              alt="Calendar"
              className="w-6 h-6 bg-gray-200 rounded-lg mr-2"
            />
            <div>
              <p className="text-gray-500 text-">Today's Date</p>
              <h1 className="text- font-bold">18th June 2025</h1>
            </div>
          </div>
        </div>

        {/* Existing stats cards div */}
        <div className="flex justify-around py-4 px-4 ">
          <div className="hover:scale-105 hover:bg-gray transition duration-300 ease-in-out bg-white border border-gray-200 rounded-lg p-4 w-100 flex items-center justify-between shadow-sm">
            <div className=' '>
              <p className="text-gray-500 text-lg py-4">Total Number of Users</p>
              <h2 className="text-2xl font-bold text-gray-800">420</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2 ">
              <img src={Community_Icon} alt="Users" className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-100 flex items-center justify-between shadow-sm hover:scale-105 hover:bg-gray transition duration-300 ease-in-out">
            <div>
              <p className="text-gray-500 text-lg py-4">Total Number of Leaders</p>
              <h2 className="text-2xl font-bold text-gray-800">150</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <img src={User_Icon} alt="Leaders" className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-100 h-30 flex items-center justify-between shadow-sm hover:scale-105 hover:bg-gray transition duration-300 ease-in-out">
            <div>
              <p className="text-gray-500 text-lg py-4">Total Number of Admins</p>
              <h2 className="text-2xl font-bold text-gray-800">150</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <img src={User_Icon} alt="Admins" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* New Membership Module div */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Leadership Strategic Conference</h3>
          <div className="flex justify-between ">
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Users</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center ">
              <p className="text-gray-700 text-sm">Number of Leaders</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Admins</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Membership Module</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Users</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Leaders</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Admins</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Membership Module</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Users</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Leaders</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Admins</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Membership Module</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Users</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Leaders</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Admins</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Membership Module</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Users</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Leaders</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm">Number of Admins</p>
              <p className="text-2xl font-bold text-gray-800">420</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;