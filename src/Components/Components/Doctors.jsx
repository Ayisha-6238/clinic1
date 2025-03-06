import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import chiefDoctor from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor4.jpeg";
import doctor3 from "../assets/doctor5.jpeg";
import doctor4 from "../assets/doctor3.jpeg";
import doctor5 from "../assets/doctor6.jpeg";
import doctor6 from "../assets/doct2.jpeg";

const doctors = [
  { id: 2, image: doctor2,  },
  { id: 3, image: doctor3,  },
  { id: 4, image: doctor4,},
  { id: 5, image: doctor5, },
  { id: 6, image: doctor6,  },
];

const DoctorsPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Adjusted for better scrolling
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section className="bg-teal-50 py-12 text-center">
        <h2 className="text-lg uppercase text-gray-600">Our Doctor's Team</h2>
        <h1 className="text-3xl font-bold text-teal-900 mt-2">
          Check Out Our <span className="text-teal-500">Experienced Doctors</span>
        </h1>

        {/* Chief Doctor Section with Dual Card */}
        <div className="relative w-64 mx-auto mt-10">
          {/* Background Card (Rotated) */}
          <div className="absolute top-3 left-3 w-full h-full bg-teal-300 rounded-lg transform rotate-3 shadow-lg"></div>
          {/* Foreground Card */}
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <img
              src={chiefDoctor}
              alt="Chief Doctor"
              className="w-full h-52 object-cover rounded-lg"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4">DR. AYSHATHUL SHIBILA (BDS)</h3>
        <p className="text-teal-600 font-semibold">CHIEF DENTAL SURGEON</p>

        {/* Scrollable Doctors List */}
        <div className="mt-10 px-8 relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Doctors List (Scrollable) */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 p-4 scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              width: "90%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className={`flex flex-col items-center min-w-[250px] ${
                  index > 3 ? "hidden md:block" : "" // Show only 4 doctors initially
                }`}
              >
                <div className="w-64 h-60 overflow-hidden border-4 border-teal-500 shadow-lg">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-base font-semibold text-gray-700">{doctor.name}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
            onClick={() => scroll("right")}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};


export default DoctorsPage;
