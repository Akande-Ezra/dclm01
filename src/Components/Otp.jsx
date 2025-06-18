import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/logo 1.jpg';
import Heroimage from '/assets/Section.png';
import Featured_Icon from '/assets/Featured icon.png';
import Arrow_Icon from '/assets/arrow-left.png';

// Reusable single-digit input
const InputBox = () => (
  <input
    type="text"
    maxLength={1}
    className="w-12 h-12 mx-2 text-center px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const Otp = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (OTP Form) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-2xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form Container - Centered Vertically */}
        <div className="flex-1 flex pt-46">
          <div className="max-w-md w-full mx-auto text-center">
            <img src={Featured_Icon} alt="Key" className="h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-2">OTP Verification</h2>
            <p className="text-gray-600 text-base mb-6">
              Please enter the 5-digit code we sent to <br /> <span className="font-medium">olukibi*****@gmail.com</span>
            </p>

            <form className="space-y-5 w-full">
              {/* OTP Inputs */}
              <div className="flex justify-center">
                <InputBox />
                <InputBox />
                <InputBox />
                <InputBox />
                <InputBox />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => navigate('/set')}
              >
                Verify OTP
              </button>

              {/* Resend */}
              <p className="text-sm text-center mt-4">
                Didn't receive the email?{' '}
                <a href="#" className="text-blue-500 hover:underline font-medium">Click to resend</a>
              </p>

              {/* Back to login */}
              <div className="flex justify-center mt-4">
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

export default Otp;