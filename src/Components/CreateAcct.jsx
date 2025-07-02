import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon from '/assets/profile.png';
import Search_Icon from '/assets/search.png';
import Bell_Icon from '/assets/bell (1).png';
import Profile_Icon1 from '/assets/Avatars.png';
import Special_Icon from '/assets/secondary.png';

const CreateAcct = () => {
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
          <p className="text-white text-2xl cursor-pointer py-2">Accounts</p>
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
        <br />
        <div>
          <p className="bg-gray-200 cursor-pointer border border-gray-200 p-4 w-96 mt-4 rounded-lg text-gray-500 text-xl">
            <Link to="/accounts">Back</Link> |{' '}
            <span className="text-blue-700 space-x-2">Accounts</span> / Create
            Accounts
          </p>
        </div>

        <div className="flex flex-col overflow-hidden gap-12 bg-white border w- border-gray-200 pb-20 rounded-lg p-4 mt-6">
          {/* Avatar and Text on the same line */}
          <div className="flex items-center gap-4">
            <img className="w-30" src={Profile_Icon1} alt="Profile" />{' '}
            {/* Adjusted to w-12 (3rem) */}
            <div>
              <h1 className="font-medium text-base leading-normal">Profile picture</h1>{' '}
              {/* Adjusted to text-base (16px) */}
              <br />
              <p className="text-sm antialiased">
                This image will be displayed on your profile
              </p>
              <br />
              <img src={Special_Icon} alt="Special" className="w h" />{' '}
              {/* Added size for consistency */}
            </div>
          </div>

        <div>
  <form className="space-y-4 w-full">
    {/* Flex container for first and last inputs */}
    <div className="flex gap-12">
      <div className="w-1/2">
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Membership ID
        </label>
        <input
          type="text"
          placeholder="Enter Membership ID"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
      <div className="w-1/2">
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Membership ID
        </label>
        <input
          type="text"
          placeholder="Enter Membership ID"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
      <div className="w-1/2">
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Membership ID
        </label>
        <input
          type="text"
          placeholder="Enter Membership ID"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
      <div className="w-1/2">
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Membership ID
        </label>
        <input
          type="text"
          placeholder="Enter Membership ID"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
    </div>

    {/* Stacked inputs below */}
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Second name
        </label>
        <input
          type="text"
          placeholder="Enter second name"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          User type
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          User sub type
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
          Access to
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>
  </form>
</div>
          </div>
        </div>
      </div>
    
  );
};

export default CreateAcct;