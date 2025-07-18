import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Heroimage from '/assets/Section.png';
import Featured_Icon1 from '/assets/Featured icon (1).png';
import Check_Icon from '/assets/Check icon.png';
import Arrow_Icon from '/assets/arrow-left.png';

const Set = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-gray-100">
      {/* Left Side (Form Section) */}
      <div className="bg-white flex flex-col p-4 md:p-6 h-full">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
         <img src={Header_Logo} alt="Logo" className=" w-8 h-7 " />
                   <p className="text-xl font-inter font-medium font-semibold">Deeper Christian Life Ministry</p>
        </div>

        {/* Form Container - Centered Vertically */}
        <div className="flex-1 flex pt-12">
          <div className="max-w-md w-full mx-auto">
            <img src={Featured_Icon1} alt="Key" className="h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-center mb-2">Set new password</h2>
            <p className="text-gray-600 text-base text-center mb-6">
              Your new password must be different from previously used passwords.
            </p>

            <form className="space-y-5 w-full">
              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full h-[56px] rotate-0 opacity-100 gap-[12px] rounded-[8px] border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Requirements */}
              <div className="flex items-center text-sm gap-2">
                <img src={Check_Icon} alt="Check" className="h-5 w-auto" />
                <span>Must be at least 8 characters</span>
              </div>
              <div className="flex items-center text-sm gap-2">
                <img src={Check_Icon} alt="Check" className="h-5 w-auto" />
                <span>Must contain one special character</span>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => navigate('/resetconf')}
              >
                Reset Password
              </button>

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

export default Set;