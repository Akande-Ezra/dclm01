import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon1 from '/assets/Avatars.png';
import Search_Icon from '/assets/search.png';
import Bell_Icon from '/assets/bell (1).png';
import Eye_Icon from '/assets/eye-alt.png';
import Edit_Icon from '/assets/edit-alt.png';
import Trash__Icon from '/assets/trash.png';

const Accounts = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(3); // Start at page 3 as per your "Page 3 of 30"
  const totalPages = 12;
  const rowsPerPage = 7; // 6 data rows + 1 pagination row

  // Sample data based on your hardcoded rows
  const tableData = [
    {
      username: 'Akinkugbe Oluranti',
      membershipId: 'DL123456789012',
      type: 'Admin',
      subType: 'Super Admin',
      access: 'LSC',
      membership: 'Membership',
      hcf: 'HCF',
      plusFour: '+4',
    },
    // Duplicate to simulate 42 rows (6 per page × 7 pages, adjusted for 12 pages)
    ...Array(41).fill({
      username: 'Akinkugbe Oluranti',
      membershipId: 'DL123456789012',
      type: 'Admin',
      subType: 'Super Admin',
      access: 'LSC',
      membership: 'Membership',
      hcf: 'HCF',
      plusFour: '+4',
    }),
  ];

  // Slice data for the current page (though we'll render all rows and hide via state)
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-900 h-full p-5 pt-8 w-60 relative overflow-y-auto">
        <div className="flex gap-2">
          <img src={Header_Logo} alt="Logo" className="h-9 w-10 mt-2" />
          <p className="text-lg font-semibold text-white font-inter pb-8">Deeper Christaian Life Ministry</p>
        </div>

        <br />
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Home_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Dashboard</p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Community_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p
            className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal"
            onClick={() => navigate('/')}
          >
            Accounts
          </p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img
            src={Cube_Icon}
            alt="Key"
            className="h-5 w-5 mb-6 filter brightness-0 invert"
          />
          <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Module</p>
        </div>
        <div className="flex gap-4 mt-70 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out">
          <img src={Headphone_Icon} alt="Key" className="h-5 w-5 mb-6" />
          <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Support</p>
        </div>
        <div className="flex gap-4 cursor-pointer hover:bg-gray-800 rounded-lg hover:scale-105 transition duration-100 ease-in-out ">
          <img src={Cog_Icon} alt="Key" className="h-5 w-5 mb-6 " />
          <p className="text-white py-0.5 font-Inter font-semibold text-[14px] leading-[1.45] tracking-normal">Settings</p>
        </div>
        <div className="flex gap-4">
          <img
            src={Profile_Icon1}
            alt="Key"
            className="h-10 w-10 rounded-full object-cover mb-"
          />
          <p className="text-white h-10 w-10 font-semibold  py-0.5">
            Samuel Ayomi <br /> <span className="h-5 w-5">@samuelayomi</span>
          </p>
        </div>
      </div>
      {/*the second side*/}
      <div className="flex-1 p-7 overflow-y-auto">
        <div>
          <img
            src={Bell_Icon}
            alt=""
            className="absolute right-30 h-6 w-6 cursor-pointer bg-gray-100 rounded-full"
          />
        </div>
        <div>
          <img
            src={Profile_Icon1}
            alt=""
            className="absolute right-15 h-8 w-8 cursor-pointer bg-gray-100 rounded-full"
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
        <div className="flex items-center space-x-230 w-full px-auto py-16">
          <div>
            <h1 className="text-3xl font-bold">Accounts</h1>
          </div>
          <button
            type="button"
            className="w-60 py-3 bg-blue-800 text-white rounded-lg ml- text-xl text-bold" onClick={() => navigate('/createacct')} 
          >
            + Create User Acount
          </button>
        </div>
        {/* New Membership Module div */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Total: 42</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-200 h-20">
                  <th className="p-4 w-2/12 text-lg">Username</th>
                  <th className="p-4 w-1/11">Membership ID</th>
                  <th className="p-4 w-1/11">Type</th>
                  <th className="p-4 w-2/12">Sub Type</th>
                  <th className="p-4 w-1/11">Access to</th>
                  <th className="p-4 w-1/11"></th>
                  <th className="p-4 w-1/11"></th>
                  <th className="p-4 w-1/11"></th>
                  <th className="p-4 w-1/11"></th>
                  <th className="p-4 w-1/11"></th>
                  <th className="p-4 w-1/11"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11 text-">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11 text-">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11 text-">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11 text-">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="border border-gray-200 h-20">
                  <td className="p-4 w-1/11">Akinkugbe Oluranti</td>
                  <td className="p-4 w-1/11">DL123456789012</td>
                  <td className="p-4 w-1/11">Admin</td>
                  <td className="p-4 w-1/11">Super Admin</td>
                  <td className="p-4 w-1/11">LSC</td>
                  <td className="p-4 w-1/11">Membership</td>
                  <td className="p-4 w-1/11">HCF</td>
                  <td className="p-4 w-1/11">+4</td>
                  <td className="p-4 w-1/11">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4 w-1/11">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="">
                  <td className="p-4 text-lg">Page {currentPage} of {totalPages}</td>
                  <td className="p-4w-1/11 "></td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        className={` flex-1 mx-1 px ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handlePageChange(num)}
                      >
                        {num}
                      </button>
                    ))}
                  </td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11"></td>
                  <td className="p-4 w-1/11">
                    <button
                      className="bg-gray-300 p-2 rounded"
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-gray-300 p-2 rounded"
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;