import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/logo 1.jpg';
import Heroimage from '/assets/section.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Form Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4 ">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form */}
        <div className="flex-1 flex pt-46">
        <div className=" max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-600 text-lg mb-4">Welcome back! Please enter your credentials.</p>

          <form className="space-y-4 w-full">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">Credentials</label>
              <input
                type="text"
                placeholder="Username/Email/Membership ID"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 font-bold">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-600" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link to="/forget" className="text-blue-600 hover:underline">Forgot Password?</Link>
            </div>

            <button
              type="button"
              className="w-full py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-200"
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

export default Hero;