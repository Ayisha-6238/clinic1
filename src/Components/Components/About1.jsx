import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";

export default function AboutSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle the images
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="bg-teal-50 w-full flex flex-col md:flex-row p-24 items-center px-4 md:px-20 pb-24">
    {/* Left Side (Text) */}
    <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
      <h2 className="text-2xl font-bold">Respected greetings from,</h2>
      <h1 className="text-2xl md:text-3xl font-bold text-teal-600">
        Dr Shibila’s Multispeciality Dental Care
      </h1>
      <h3 className="text-md font-medium text-gray-700">- Grow Up With Smiling...!</h3>
      <p className="text-gray-600 leading-relaxed hover:text-emerald-500">
        At Dr Shibila’s Multispeciality Dental Care, we are dedicated to
        providing top-quality dental care with a focus on comfort, innovation,
        and patient satisfaction. Our team of experienced dentists and
        specialists use advanced technology to offer comprehensive treatments,
        from routine check-ups to specialized procedures.
      </p>
      <Link to={"/about"}>
        <button className="mt-4 bg-white text-teal-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">
          Learn More
        </button>
      </Link>
    </div>
  
    {/* Right Side (Flipping Images) */}
    <div className="w-full md:w-1/2 flex justify-center pb-40 md:mt-0 relative">
      {/* Background Image */}
      <div
        onClick={handleFlip}
        className={`absolute w-64 h-64 md:w-80 md:h-80 shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${
          isFlipped ? "z-10 scale-105 rotate-0" : "z-0 rotate-12"
        }`}
      >
        <img src="/8c15dbbfa86925eaef4ca33ca9dee974.png" alt="Background" className="w-full h-full object-cover" />
      </div>
  
      {/* Foreground Image */}
      <div
        onClick={handleFlip}
        className={`absolute w-64 h-64 md:w-80 md:h-80 shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${
          isFlipped ? "z-0 rotate-12 scale-100 -translate-x-6 -translate-y-6" : "z-10 scale-105"
        }`}
      >
        <img src="/clinic2.png" alt="Foreground" className="w-full h-full object-cover" />
      </div>
    </div>
    <Outlet/>
  </section>
  );
}
