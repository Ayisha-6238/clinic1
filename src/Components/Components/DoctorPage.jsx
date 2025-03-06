import React from "react";
import Footer from "./Footer";
import Navbar from "./Nav";
import DoctorHeroSection from "./DoctorHero";

const teamMembers = [
  { id: 1, image: require("../assets/doctor1.jpeg") },
  { id: 2, image:require("../assets/doctor4.jpeg")},
  { id: 3, image: require("../assets/doctor5.jpeg")},
  { id: 4, image: require("../assets/doctor3.jpeg") },
  { id: 5, image:require("../assets/doctor6.jpeg") },
  {id:6,image:require("../assets/doc2.jpeg")},
];

const TeamSection = () => {
  return (
    <div>
      <Navbar />
      <DoctorHeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* First Row - Single Doctor (No Background) */}
          <div className="flex justify-center mb-8">
            <img
              src={teamMembers[0].image}
              alt="Doctor"
              className="w-60 h-64 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(1, 3).map((member) => (
              <div key={member.id} className=" p-6 flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={member.image} alt="Doctor" className="w-80 h-auto" />
              </div>
            ))}
          </div>

          {/* Third Row - 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(3, 5).map((member) => (
              <div key={member.id} className=" p-6 flex items-center justify-center  transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={member.image} alt="Doctor" className="w-80 h-auto" />
              </div>
            ))}
          </div>

          {/* Fourth Row - Single Image (Same Size as Others) */}
          <div className="flex justify-center">
            <div className=" p-6 flex items-center justify-center  transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={teamMembers[4].image} alt="Doctor" className="w-80 h-auto" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamSection;
