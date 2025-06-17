import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/logo 1.jpg';
import Heroimage from '/assets/section.png';
import Key_Icon from '/assets/key-01.png';
import Arrow_Icon from '/assets/arrow-left.png';

const Forget = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Form Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-2xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form Container - Centered Vertically */}
        <div className="flex-1 flex pt-46">
          <div className="max-w-md w-full mx-auto">
            <img src={Key_Icon} alt="key" className="h-8 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-center mb-2">Forgot Password?</h2>
            <p className="text-gray-600 text-base mb-6 text-center">No worries, we’ll send you reset instructions.</p>

            <form className="space-y-5 w-full">
              <div>
                <label className="block mb-1 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
              </div>

              <button
                type="button"
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => navigate('/otp')}
              >
                Reset Password
              </button>

              <div className="flex items-center justify-center pt-2">
                <img src={Arrow_Icon} alt="Back" className="h-5 mr-2" />
                <Link to="/" className="text-blue-500 hover:underline">Back to Log in</Link>
              </div>
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

export default Forget;