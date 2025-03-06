import { useState } from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import AboutHero from "./AboutHero";
import "./style.css"

const AboutPage = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <div>
      <Navbar />
      <AboutHero />

      <section className="py-14 max-w-6xl mx-auto px-3">
        <h2 className=" abouts text-4xl font-bold text-center text-teal-700 mb-8">
          Respected greetings from, <br />
          <span className= "text-teal-600">Dr. Shibila’s Multispeciality Dental Care</span>
        </h2>
        <p className="text-center text-teal-700 text-lg pl-7 font-semibold italic">
          - Grow Up With Smiling...!
        </p>

        {/* First Section - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-5">
          {/* Text */}
          <div className="md:w-1/2">
            <p className=" about2 text-gray-700 leading-relaxed text-lg">
              At Dr Shibila’s Dental Clinic, we are dedicated to providing top-quality dental care with a focus on comfort, innovation, and patient satisfaction. Our team of experienced dentists and specialists use advanced technology to offer comprehensive treatments, from routine check-ups to specialized procedures.


            </p>
          </div>

          {/* Flipping Images */}
          <div className="md:w-1/2 flex justify-center relative h-[320px]">
            <div
              onClick={() => setIsFlipped1(!isFlipped1)}
              className={`absolute w-64 min-w-[250px] h-64 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${isFlipped1 ? "z-10 scale-105 rotate-0" : "z-0 rotate-12"
                }`}
            >
              <img src="/8c15dbbfa86925eaef4ca33ca9dee974.png" alt="Background" className="w-full h-full rounded-lg object-cover" />
            </div>

            <div
              onClick={() => setIsFlipped1(!isFlipped1)}
              className={`absolute w-64 min-w-[250px] h-64 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${isFlipped1 ? "z-0 rotate-12 scale-100 -translate-x-6 -translate-y-6" : "z-10 scale-105"
                }`}
            >
              <img src="/clinic2.png" alt="Foreground" className="w-full h-full rounded-lg object-cover" />
            </div>
          </div>
        </div>

        {/* Second Section - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          {/* Flipping Images */}
          <div className="md:w-1/2 flex justify-center relative h-[320px]">
            <div
              onClick={() => setIsFlipped2(!isFlipped2)}
              className={`absolute w-64 min-w-[250px] h-64 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${isFlipped2 ? "z-10 scale-105 rotate-0" : "z-0 rotate-12"
                }`}
            >
              <img src="/clinic.png" alt="Background" className="w-full h-full rounded-lg object-cover" />
            </div>

            <div
              onClick={() => setIsFlipped2(!isFlipped2)}
              className={`absolute w-64 min-w-[250px] h-64 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-700 cursor-pointer transition-transform duration-700 ${isFlipped2 ? "z-0 rotate-12 scale-100 -translate-x-6 -translate-y-6" : "z-10 scale-105"
                }`}
            >
              <img src="/clinic1.png" alt="Foreground" className="w-full h-full rounded-lg object-cover" />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <p className=" about2 text-gray-700 leading-relaxed text-lg">
              We believe in a patient-first approach, ensuring personalized care in a friendly and relaxing environment. Whether you need preventive care, cosmetic enhancements, or restorative treatments, we are here to help you achieve a healthy, beautiful smile.Your oral health is our priority, and we strive to make every visit a positive experience.
               Book an appointment today and experience world-class dental care with us!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
