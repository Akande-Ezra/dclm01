import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Heroimage from '/assets/Section.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Form Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-2 ">
          <img src={Header_Logo} alt="Logo" className=" w-8 h-7 " />
          <p className="text-xl font-inter font-medium font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form */}
    <div className="min-h-screen flex items-center justify-center md:-mt-5">
      <div className="max-w-md w-full mx-auto p-4">
        <h2 className="font-Inter font-semibold text-3xl leading-[38px] tracking-normal">Login</h2>
        <p className="text-gray-600 font-Inter font-normal text-base mb-4">
          Welcome back! Please enter your credentials.
        </p>

        <form className="space-y-4 w-full">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Credentials
            </label>
            <input
              type="text"
              placeholder="Username/Email/Membership ID"
              className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-[56px] px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-blue-600" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link to="/forget" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="button"
            className="w-full h-[56px] py-4 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={() => navigate('/dashboard')}
          >
            Sign in
          </button>
        </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
        </div>

        {/* Footer */}
        <div className="text-sm sm:p-6 text-gray-500 mt-auto text-center">© DCLM 2025</div>
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

export default Hero;