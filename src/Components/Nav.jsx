import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl flex justify-between items-center px-5 py-2 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-gray-200 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
          <img src="/759e25bf956a279e86c9ce07b8205ceb.png" alt="Logo" className="h-14 w-auto" /> {/* Change logo.png */}
        </div>
      {/* Nav Links */}
      <ul className="flex space-x-10">
        {["HOME", "ABOUT US", "OUR DOCTORS", "OUR SERVICES", "CONTACT US"].map(
          (item, index) => (
            <li key={index} className="relative group text-teal-600 font-medium">
              <a href="#" className="hover:text-teal-500">{item}</a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          )
        )}
      </ul>

      {/* Button */}
      <button className="px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition">
        Make Appointment
      </button>
    </nav>
  );
};

export default Navbar;
