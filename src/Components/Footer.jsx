import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo & Title */}
        <div className="mb-4 flex justify-center items-center">
          <img src="/759e25bf956a279e86c9ce07b8205ceb.png" alt="Dr. Shibilia's Logo" className="h-16 mr-2" />
          <h2 className="text-teal-600 text-xl font-semibold">
            Dr. Shibilia’s Multi Speciality Dental Care
          </h2>
        </div>

        {/* Underline */}
        <div className="border-b-2  border-gray-600 w-3/4 mx-auto mb-6"></div>
        {/* Footer Sections */}
        <div className="grid md:grid-cols-3 gap-8 text-sm px-6">
          {/* About Us */}
          <div className="text-left">
            <h3 className="font-semibold text-lg">About Us</h3>
            <p className="text-gray-400 mt-2">
              <span className="font-semibold">Dr. Shibilia’s Dental Clinic</span>, we are dedicated
              to providing top-quality dental care with a focus on comfort, innovation, and patient satisfaction.
            </p>
          </div>

          {/* Contact Us - FIXED (Address and Content in Same Line) */}
          <div className="text-left">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="text-gray-400 mt-2"><span className="font-semibold">Address:</span> Healthcare Clinic Building, Puzhakkal</p>
            <p className="text-gray-400"><span className="font-semibold">Email:</span> shibiliadentalcare@gmail.com</p>
            <p className="text-gray-400"><span className="font-semibold">Phone:</span> 8921287544</p>
          </div>

          {/* Links */}
          <div className="text-left">
            <h3 className="font-semibold text-lg">Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Our Doctors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
