import React, { useState } from "react";

export default function AboutSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="bg-white w-full flex flex-col md:flex-row items-center px-6 md:px-20 pb-32">
      {/* Left Side (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-lg font-semibold">Respected greetings from,</h2>
        <h1 className="text-2xl md:text-3xl font-bold text-teal-600">
          Dr Shibila’s Multispeciality Dental Care
        </h1>
        <h3 className="text-md font-medium text-gray-700">
          - Grow Up With Smiling...!
        </h3>
        <p className="text-gray-600 leading-relaxed">
          At Dr Shibila’s Multispeciality Dental Care, we are dedicated to
          providing top-quality dental care with a focus on comfort, innovation,
          and patient satisfaction. Our team of experienced dentists and
          specialists use advanced technology to offer comprehensive treatments,
          from routine check-ups to specialized procedures.
        </p>
        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition">
          Learn About Us
        </button>
      </div>

      {/* Right Side (Swappable Images) */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
        {/* Background Image (Initially Rotated) */}
        <div
          className={`absolute w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-700 transition-all duration-700 ${
            isFlipped ? "z-10 scale-105 rotate-0" : "z-0 rotate-12"
          }`}
        >
          <img
            src="/8c15dbbfa86925eaef4ca33ca9dee974.png"
            alt="Background"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Foreground Image (Clickable) */}
        <div
          onClick={handleFlip}
          className={`relative w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg cursor-pointer transition-all duration-700 ${
            isFlipped ? "z-0 rotate-12 scale-100 -translate-x-6 -translate-y-6" : "z-10 scale-105"
          }`}
        >
          <img
            src="/clinic2.png"
            alt="Foreground"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
