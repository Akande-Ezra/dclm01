import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Header_Logo from '../assets/logo 1.jpg';
import Heroimage from '../assets/section.png';
import Check_Icon from '../assets/Check icon.png';

const Signup = () => {
   const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Sign Up Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-2xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form Container - Centered Vertically */}
        <div className="flex-1 flex pt-8">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-4xl font-bold mb-2">Sign up</h2>
            <p className="text-gray-600 text-lg mb-6">Welcome! Please enter your details.</p>

            <form className="space-y-5 w-full">
              <div>
                <label className="block mb-1 text-sm font-medium">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter Username"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter Email Address"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Membership ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter Membership ID"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
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
                className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"onClick={() => navigate('/')}
              >
                Get Started
              </button>

              {/* Footer Link */}
              <p className="text-sm text-center mt-4">
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