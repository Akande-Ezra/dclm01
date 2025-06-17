import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '../assets/logo 1.jpg';
import Heroimage from '../assets/section.png';
import Featured_Icon2 from '../assets/Featured icon (2).png';
import Arrow_Icon from '../assets/arrow-left.png';

const Resetconf = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Content Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-2xl font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Content Container - Centered Vertically */}
        <div className="flex-1 flex pt-46">
          <div className="max-w-md w-full mx-auto text-center">
            <img src={Featured_Icon2} alt="Success" className="h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-center mb-2">Password Reset</h2>
            <p className="text-gray-600 text-base text-center mb-6">
              Your password has been successfully reset. Click below to log in automatically.
            </p>

            <form className="space-y-5 w-full">
              <button
                type="button"
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => navigate('/')}
              >
                Continue
              </button>

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

export default Resetconf;