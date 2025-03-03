import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Why Choose Us?</h2>

      {/* First Section: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-8">
        <div className="relative w-56 h-56 md:w-64 md:h-64 border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[-6deg]">
          <img src="/doctor-smiling.jpg" alt="Doctor Smiling" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-lg text-gray-700 space-y-4">
          <p><span className="text-teal-600 font-semibold">Expert Care –</span> Our skilled professionals provide top-quality treatments using the latest techniques.</p>
          <p><span className="text-teal-600 font-semibold">Advanced Technology –</span> We use state-of-the-art equipment for precise, painless, and effective treatments.</p>
        </div>
      </div>

      {/* Second Section: Image Right, Text Left */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center mt-6 gap-8">
        <div className="relative w-56 h-56 md:w-64 md:h-64 border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[6deg]">
          <img src="/happy-patient.jpg" alt="Happy Patient" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-lg text-gray-700 space-y-4">
          <p><span className="text-teal-600 font-semibold">Personalized Approach –</span> Every patient receives customized care tailored to their specific needs.</p>
          <p><span className="text-teal-600 font-semibold">Comfort & Safety –</span> A stress-free, hygienic, and friendly environment for the best dental experience.</p>
          <p><span className="text-teal-600 font-semibold">Affordable & Transparent Pricing –</span> Quality dental care at fair prices with no hidden costs.</p>
          <p><span className="text-teal-600 font-semibold">Proven Results –</span> Thousands of happy smiles and satisfied patients trust our expertise.</p>
        </div>
      </div>
    </section>
  );
}
