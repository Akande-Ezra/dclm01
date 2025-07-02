import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_Logo from '/assets/church_logo-1.png';
import Home_Icon from '/assets/home-alt-2.png';
import Cube_Icon from '/assets/cube.png';
import Community_Icon from '/assets/community.png';
import Cog_Icon from '/assets/cog.png';
import Headphone_Icon from '/assets/headphone-mic.png';
import Profile_Icon from '/assets/profile.png';
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
      <div className="bg-gray-900 h-full p-5 pt-8 w-90 relative overflow-y-auto">
        <div className="flex gap-4">
          <img src={Header_Logo} alt="Logo" className="h-14 w-auto" />
          <p className="text-xl font-semibold text-white pb-8">Deeper Christaian Life Ministry</p>
        </div>

        <br />
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Home_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p className="text-white text-2xl py-2">Dashboard</p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Community_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p
            className="text-white text-2xl cursor-pointer py-2"
            onClick={() => navigate('/')}
          >
            Accounts
          </p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img
            src={Cube_Icon}
            alt="Key"
            className="h-10 mb-6 filter brightness-0 invert"
          />
          <p className="text-white text-2xl py-2">Module</p>
        </div>
        <div className="flex gap-4 mt-100 cursor-pointer">
          <img src={Headphone_Icon} alt="Key" className="h-10 mb-6" />
          <p className="text-white text-2xl py-1">Support</p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img src={Cog_Icon} alt="Key" className="h-10 mb-6" />
          <p className="text-white text-2xl py-1">Settings</p>
        </div>
        <div className="flex gap-4">
          <img
            src={Profile_Icon}
            alt="Key"
            className="h-12 w-15 rounded-full object-cover mb-"
          />
          <p className="text-white text-2xl py-1">
            Samuel Ayomi <br /> <span className="text-xl">@samuelayomi</span>
          </p>
        </div>
      </div>
      {/*the second side*/}
      <div className="flex-1 p-7 overflow-y-auto">
        <div>
          <img
            src={Bell_Icon}
            alt=""
            className="absolute right-30 h-10 w-10 cursor-pointer bg-gray-100 rounded-full"
          />
        </div>
        <div>
          <img
            src={Profile_Icon}
            alt=""
            className="absolute right-10 h-12 w-12 cursor-pointer bg-gray-100 rounded-full"
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
        <div className="flex items-center space-x-220 w-full px-auto py-16">
          <div>
            <h1 className="text-4xl font-bold">Accounts</h1>
          </div>
          <button
            type="button"
            className="w-80 py-3 bg-blue-800 text-white rounded-lg ml-85 text-xl text-bold" onClick={() => navigate('/createacct')} 
          >
            + Create User Acount
          </button>
        </div>
        {/* New Membership Module div */}
        <div className="bg-white border border-gray-200 pb-20 rounded-lg p-4 mt-6">
          <h3 className="text-gray-500 text-lg font-semibold mb-2">Total: 42</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-lg">Username</th>
                  <th className="p-4">Membership ID</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Sub Type</th>
                  <th className="p-4">Access to</th>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr><br />
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Akinkugbe Oluranti</td>
                  <td className="p-4">DL123456789012</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4">Super Admin</td>
                  <td className="p-4">LSC</td>
                  <td className="p-4">Membership</td>
                  <td className="p-4">HCF</td>
                  <td className="p-4">+4</td>
                  <td className="p-4">
                    <img src={Eye_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Edit_Icon} alt="" />
                  </td>
                  <td className="p-4">
                    <img src={Trash__Icon} alt="" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 text-lg">Page {currentPage} of {totalPages}</td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        className={`mx-1 px-2 ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handlePageChange(num)}
                      >
                        {num}
                      </button>
                    ))}
                  </td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4">
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