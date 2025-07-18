import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Heroimage from '/assets/Section.png';
import Check_Icon from '/assets/Check icon.png';

const Signup = () => {
   const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Sign Up Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
         <img src={Header_Logo} alt="Logo" className=" w-8 h-7 " />
                   <p className="text-xl font-inter font-medium font-semibold">Deeper Christian Life Ministry</p>
        </div>

       {/* Form Container - Centered Vertically */}
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-4">
        <h2 className="font-Inter font-semibold text-3xl leading-[38px] tracking-normal">Sign up</h2>
        <p className="text-gray-600 text-lg mb-6">Welcome! Please enter your details.</p>

        <form className="space-y-5 w-full">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Username"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email Address"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Membership ID</label>
            <input
              type="text"
              className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Membership ID"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a Password"
            />
          </div>

          {/* Password Tips */}
          <div className="flex items-center text-sm gap-2">
            <img src={Check_Icon} alt="" className="w-5 h-5" />
            <span>Must be at least 8 characters</span>
          </div>
          <div className="flex items-center text-sm gap-2">
            <img src={Check_Icon} alt="" className="w-5 h-5" />
            <span>Must contain one special character</span>
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            onClick={() => navigate('/dashboard')} // Updated to a valid path
          >
            Get Started
          </button>

          {/* Footer Link */}
          <p className="text-sm text-center mt-">
            Already have an account?{' '}
            <Link to="/" className="text-blue-600 hover:underline font-medium">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-4">© DCLM 2025</div>
      </div>

      {/* Right Side (Image Section) — only visible on md+ */}
      <div className="hidden md:block w-full h-full relative">
        <img
          src={Heroimage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;