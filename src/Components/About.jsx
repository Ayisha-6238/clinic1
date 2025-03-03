import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-teal-600">About Us</h2>
        <p className="text-gray-600 mt-2">Home &gt; About Us</p>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/about-hero.jpg"
            alt="Doctor Smiling"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-16 md:flex md:items-center md:gap-12">
        {/* Left Text */}
        <div className="md:w-1/2 text-gray-700 space-y-4">
          <p className="text-lg font-semibold">Respected greetings from,</p>
          <h3 className="text-2xl font-bold text-teal-600">Dr Shibila’s Multispeciality Dental Care</h3>
          <p className="italic text-gray-500">- Grow Up With Smiling....!</p>
          <p>
            At Dr. Shibila’s Dental Clinic, we are dedicated to providing top-quality
            dental care with a focus on comfort, innovation, and patient satisfaction.
            Our team of experienced dentists and specialists use advanced technology
            to offer comprehensive treatments, from routine check-ups to specialized procedures.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[6deg]">
            <img src="/dental-clinic.jpg" alt="Dental Clinic" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-6 py-16 md:flex md:items-center md:gap-12 md:flex-row-reverse">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 border-4 border-teal-500 rounded-3xl overflow-hidden shadow-lg rotate-[-6deg]">
            <img src="/dental-chair.jpg" alt="Dental Chair" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-gray-700 space-y-4">
          <p>
            We believe in a patient-first approach, ensuring personalized care in a friendly
            and relaxing environment. Whether you need preventive care, cosmetic enhancements,
            or restorative treatments, we are here to help you achieve a healthy, beautiful smile.
          </p>
          <p>
            Your oral health is our priority, and we strive to make every visit a positive experience.
            Book an appointment today and experience world-class dental care with us!
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-lg font-semibold text-teal-400">Dr Shibila’s Multi-Speciality Dental Care</h4>
          <p className="mt-2 text-gray-400">Providing exceptional dental services with a smile.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-teal-400">About Us</a>
            <a href="#" className="hover:text-teal-400">Contact Us</a>
            <a href="#" className="hover:text-teal-400">Services</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
