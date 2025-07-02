import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon from '/assets/profile.png';
import Search_Icon from '/assets/search.png';
import Bell_Icon from '/assets/bell (1).png';
import Calendar_Icon from '/assets/calendar.png';
import User_Icon from '/assets/user-circle.png';

const Dashboard = () => {
const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-900 h-full p-5 pt-8 w-90 relative overflow-y-auto">
        <div className="flex gap-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-xl font-semibold text-white pb-8">Deeper Christaian Life Ministry</p>
        </div>

        <br />
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Home_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p className="text-white text-2xl py-2">Dashboard</p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Community_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p className="text-white text-2xl cursor-pointer py-2" onClick={() => navigate('/accounts')} >Accounts</p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Cube_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p className="text-white text-2xl py-2">Module</p>
        </div>
        <div className="flex gap-4 mt-100 cursor-pointer">
          <img src={Headphone_Icon} alt="Key" className="h-10 mb-6" />
          <p className="text-white text-2xl py-1">Support</p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img src={Cog_Icon} alt="Key" className="h-10 mb-6" />
          <p className="text-white text-2xl py-1">Settings</p>
        </div>
        <div className="flex gap-4">
          <img
            src={Profile_Icon}
            alt="Key"
            className="h-12 w-15 rounded-full object-cover mb-"
          />
          <p className="text-white text-2xl py-1">
            Samuel Ayomi <br /> <span className="text-xl">@samuelayomi</span>
          </p>
        </div>
      </div>
      {/*the second side*/}
      <div className="flex-1 p-7 overflow-y-auto">
        <div>
          <img
            src={Bell_Icon}
            alt=""
            className="absolute right-30 h-10 w-10 cursor-pointer bg-gray-100 rounded-full"
          />
        </div>
        <div>
          <img
            src={Profile_Icon}
            alt=""
            className="absolute right-10 h-12 w-12 cursor-pointer bg-gray-100 rounded-full"
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
        <div className="flex items-center space-x-250 w-full px- py-16">
          <div>
            <h1 className="text-4xl font-bold">Welcome back, David</h1>
            <p className="text-gray-500 text-xl">
              Track and manage all information of users accounts
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 w-55 h-16 flex items-center justify-center bg-gray-100">
            <img
              src={Calendar_Icon}
              alt="Calendar"
              className="w-8 bg-gray-00 rounded-lg mr-2"
            />
            <div>
              <p className="text-gray-500 text-lg">Today's Date</p>
              <h1 className="text-lg font-bold">18th June 2025</h1>
            </div>
          </div>
        </div>

        {/* Existing stats cards div */}
        <div className="flex justify-around py-4 px-4 bg-gray-100 ">
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-100 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-lg py-4">Total Number of Users</p>
              <h2 className="text-2xl font-bold text-gray-800">420</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <img src={Community_Icon} alt="Users" className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-100 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-lg py-4">Total Number of Leaders</p>
              <h2 className="text-2xl font-bold text-gray-800">150</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <img src={User_Icon} alt="Leaders" className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-100 h-30 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-lg py-4">Total Number of Admins</p>
              <h2 className="text-2xl font-bold text-gray-800">150</h2>
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <img src={User_Icon} alt="Admins" className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* New Membership Module div */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Leadership Strategic Conference</h3>
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