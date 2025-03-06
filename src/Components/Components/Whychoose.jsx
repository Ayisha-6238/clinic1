import React from "react";
import "./style.css";

export default function WhyChooseUs() {
  return (
    <section className="bg-teal-50 py-16 md:py-16 px-6">
      <h2 className="why text-2xl font-bold text-gray-800 text-center mb-8">
        Why Choose Us?
      </h2>

      <div className="flex flex-col gap-12">
        {/* First Section (Images Left, Content Right) */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          {/* Image Section */}
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            {/* Background Image */}
            <div className="absolute top-3 left-6 w-full h-full border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[9deg] opacity-85 transition transform hover:scale-105">
              <img
                src="/patients1.png"
                alt="Doctor Smiling"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Foreground Image */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[-7deg] transition transform hover:scale-105">
              <img
                src="/patients.png"
                alt="Doctor Smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 text-gray-700 space-y-4 md:text-left px-4">
            <p>
              <span className="text-teal-600 font-semibold">Expert Care –</span> 
              Our skilled professionals provide top-quality treatments using the latest techniques.
            </p>
            <p>
              <span className="text-teal-600 font-semibold">Advanced Technology –</span> 
              We use state-of-the-art equipment for precise, painless, and effective treatments.
            </p>
            <p>
              <span className="text-teal-600 font-semibold">Personalized Approach –</span> 
              Every patient receives customized care tailored to their specific needs.
            </p>
          </div>
        </div>

        {/* Second Section (Content Left, Images Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 justify-center">
          {/* Image Section */}
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            {/* Background Image */}
            <div className="absolute top-3 left-3 w-full h-full border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[9deg] opacity-80 transition transform hover:scale-105">
              <img
                src="/clinic4.png"
                alt="Happy Patient"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Foreground Image */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[-12deg] transition transform hover:scale-105">
              <img
                src="/clinic3.png"
                alt="Happy Patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 text-gray-700 space-y-4 md:text-left px-4">
            <p>
              <span className="text-teal-600 font-semibold">Comfort & Safety –</span> 
              A stress-free, hygienic, and friendly environment for the best dental experience.
            </p>
            <p>
              <span className="text-teal-600 font-semibold">Affordable & Transparent Pricing –</span> 
              Quality dental care at fair prices with no hidden costs.
            </p>
            <p>
              <span className="text-teal-600 font-semibold">Proven Results –</span> 
              Thousands of happy smiles and satisfied patients trust our expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
