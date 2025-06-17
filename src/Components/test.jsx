import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '../assets/logo 1.jpg';
import Heroimage from '../assets/section.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side - Login Section */}
      <div className="flex-1 bg-white flex flex-col pl-10 justify-between p-10 overflow-y-auto md:w-1/2">
        {/* Top: Logo */}
        <div className="flex items-center space-x-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-2xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Middle: Login Form */}
        <div className="flex flex-col justify-center p-2 mx-auto max-w-md w-full center">
          <h2 className="text-4xl font-bold mb-2">Log in</h2>
          <p className="text-gray-600 text-xl mb-6">Welcome back! Please enter your credentials.</p>

          <form className="space-y-5 space-x-10 w-full">
            <div>
              <label className="block mb-1 text-sm font-medium">Credentials</label>
              <input
                type="text"
                placeholder="Username/Email/Membership ID"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forget" className="text-blue-600 hover:underline px-1">Forgot Password?</Link>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate('/dashboard')}
            >
              Sign in
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Bottom: Footer */}
        <div className="text-sm text-gray-500 mt-6">&copy; DCLM 2025</div>
      </div>

      {/* Right Side - Image Section (Hide on small screens) */}
      <div className="hidden md:block flex-1 h-full">
        <img
          src={Heroimage}
          alt="Hero"
          className="w-full h-full object-cover px-10 right-0"
          style={{ display: 'block', minWidth: '100%', minHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default Hero;
