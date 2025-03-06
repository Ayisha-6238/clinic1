import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/759e25bf956a279e86c9ce07b8205ceb.png";
import hero1 from "../assets/3f142284a68baee0fababc3e47bd20aa (1).png";
import hero2 from "../Components/2434a5ab6dfad8950b2f81b95aac4292.png";
import hero3 from "../Components/265c624eeb0d62cb5d69ed874c2f9a6a.png";
import Navbar from "./Nav";
import ContactHeroSection from "./ContactUsHero";
import Footer from "./Footer";
const ContactUs = () => {
  return (
    <div className="bg-white">
      <Navbar/>
     
      <ContactHeroSection/>
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto my-8 p-6  rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-teal-800 text-center">Send a Message</h2>
        <p className="text-center text-gray-600 mb-6">We are here to help you</p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input type="text" placeholder="Your Full Name" className="w-1/2 p-3 border rounded-lg" />
            <input type="email" placeholder="Email Address" className="w-1/2 p-3 border rounded-lg" />
          </div>
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">Send Us</button>
        </form>
      </div>
<Footer/>
    </div>
  );
};

export default ContactUs;
