import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import image1 from "./3f142284a68baee0fababc3e47bd20aa.png";
import image2 from "./2434a5ab6dfad8950b2f81b95aac4292.png";
import image3 from "./265c624eeb0d62cb5d69ed874c2f9a6a.png";
import Footer from './Footer'
import Appoinment from "./Appoinment"
import WhyChoose from "./Whychoose"
import Doctor from "./Doctors"
import Service from "./service"
import About from "./About1"
import Navbar from "./Nav";

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2, image3];
  const navigate = useNavigate();

  // Auto change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div>
    <Navbar/>
    <section className="relative min-h-screen h-screen overflow-hidden ">
      {/* Background Images with Smooth Transition */}
      <div className="relative h-full w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} alt={`Dental care ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Hero Content Box */}
        <div className="absolute left-8 md:left-32 top-1/4 bg-teal-700 text-white p-6 rounded-2xl shadow-lg max-w-screen-md bg-opacity-80">
          <h1 className="text-xl md:text-3xl font-bold leading-tight">
            Caring for Your <span className="text-yellow-300">Smile</span>,
            <p className="text-2xl md:text-4xl font-semibold">One Visit at a Time!</p>
          </h1>
          <button 
            onClick={() => navigate("/services")}
            className="mt-4 bg-teal-400 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-600 transition-all"
          >
            Explore Our Services
          </button>
        </div>

        {/* SVG Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-64 md:h-40" preserveAspectRatio="none">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,181.3C672,181,768,139,864,133.3C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <About/>
    <Service/>
    <Doctor/>
    <WhyChoose/>
    <Appoinment/>
    <Footer/>
    <Outlet/>
   </div>

  );
};

export default HeroSection;
