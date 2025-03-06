import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"; 
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl px-5 py-2 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-gray-200 z-50 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/759e25bf956a279e86c9ce07b8205ceb.png" alt="Logo" className="h-14 w-auto" />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-10">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "OUR DOCTORS", path: "/doctors" },
            { name: "OUR SERVICES", path: "/services" },
            { name: "CONTACT US", path: "/contact" },
          ].map((item, index) => (
            <li key={index} className="relative group text-teal-600 font-medium">
              <Link to={item.path} className="hover:text-teal-500">
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <Link
          to="/appointment"
          className="hidden md:block px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          Make Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-teal-600 text-3xl " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center  rounded-3xl space-y-4 py-4 md:hidden">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "OUR DOCTORS", path: "/doctors" },
              { name: "OUR SERVICES", path: "/services" },
              { name: "CONTACT US", path: "/contact" },
            ].map((item, index) => (
              <Link key={index} to={item.path} className="text-teal-600 text-lg font-medium" onClick={() => setMenuOpen(true)}>
                {item.name}
              </Link>
            ))}

            <Link
              to="/appointment"
              className="px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition"
              onClick={() => setMenuOpen(true)}
            >
              Make Appointment
            </Link>
          </div>
        )}
      </nav>

      {/* Outlet to Render Other Pages */}
      <Outlet />
    </div>
  );
};

export default Navbar;
