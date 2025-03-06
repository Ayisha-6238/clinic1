import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/759e25bf956a279e86c9ce07b8205ceb.png";
import hero1 from "../Components/3f142284a68baee0fababc3e47bd20aa.png";
import hero2 from "../Components/2434a5ab6dfad8950b2f81b95aac4292.png";
import hero3 from "../Components/265c624eeb0d62cb5d69ed874c2f9a6a.png";
import doctorImage from "../assets/05273bb7d469c6cb49c60db7ecc01454.png";
import Navbar from "./Nav";
import Hero1 from "./appoinmentHero"
import Footer from "./Footer";


const images = [hero1, hero2, hero3];

const AppointmentPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <Navbar/>
      <Hero1/>
      
      {/* Appointment Section */}
      <section className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-10">
        {/* Appointment Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Make an Appointment</h2>
          <form className="space-y-4">
            <input type="date" className="w-full p-3 border rounded-lg" required />
            <select className="w-full p-3 border rounded-lg">
              <option>Select Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
            <input type="text" placeholder="Your Full Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
            <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700">Make Appointment</button>
          </form>
        </div>
        
        {/* Doctor Image */}
        <div className="w-full md:w-1/2 transition transform hover:scale-105">
          <img src={doctorImage} alt="Doctor" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </section>

  
      

      <Footer/>
     
    </div>
  );
};

export default AppointmentPage;
