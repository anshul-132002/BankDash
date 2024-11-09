// Navbar.js
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white p-5">
      <h2 className="text-2xl font-Noto text-gray-500">Overview</h2>
      <div className="flex items-center justify-end space-x-6">
        <div className="relative flex items-center">
          <FaSearch className="absolute left-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search for something"
            className="pl-12 pr-4 py-2 rounded-md w-64 h-12 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-4 ml-8">
          <img src="set.png" alt="settings" className="w-10 h-10" />
          <img src="bell.png" alt="notifications" className="w-10 h-10" />
          <img
            src="christina.png"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
