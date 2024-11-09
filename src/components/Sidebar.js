import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <TfiAlignLeft
        onClick={toggleSidebar}
        className="md:hidden text-3xl text-gray-600 cursor-pointer p-2 transition-transform duration-300 ease-in-out"
      />

      <aside
        className={`${
          isOpen ? "hidden" : "block"
        } md:block w-[250px] h-screen bg-white p-6 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-semibold mb-8 flex text-gray-500">
          <img src="logo.png" alt="logo" className="mr-2 h-9 w-9" />
          BankDash
        </h2>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-4 text-gray-400 hover:text-blue-500"
          >
            <img src="home2.png" className="h-[25px] w-[25px]" alt="home" />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img
              src="transfer.png"
              className="h-[25px] w-[25px]"
              alt="transaction"
            />
            <span>Transaction</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img src="user.png" className="h-[25px] w-[25px]" alt="account" />
            <span>Account</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img
              src="investment.png"
              className="h-[25px] w-[25px]"
              alt="investment"
            />
            <span>Investment</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img
              src="credit-card.png"
              className="h-[25px] w-[25px]"
              alt="credit-card"
            />
            <span>Credit Cards</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img src="loan.png" className="h-[25px] w-[25px]" alt="loan" />
            <span>Loans</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img
              src="services.png"
              className="h-[25px] w-[25px]"
              alt="services"
            />
            <span>Services</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img src="eco.png" className="h-[25px] w-[25px]" alt="privileges" />
            <span>My Privileges</span>
          </Link>
          <Link className="flex items-center space-x-4 text-gray-400 hover:text-blue-500">
            <img
              src="settings.png"
              className="h-[25px] w-[25px]"
              alt="settings"
            />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
