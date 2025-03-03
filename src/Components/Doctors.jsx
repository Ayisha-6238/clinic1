import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const doctors = [
  {
    id: 1,
    name: "Dr. Ayshathul Shibila (BDS)",
    title: "Chief Dental Surgeon",
    image: "/doctor1.jpg",
    isChief: true,
  },
  { id: 2, name: "Dr. Muhammad Zakaria", title: "Senior Dental Surgeon", image: "/doctor2.jpg" },
  { id: 3, name: "Dr. Sahal Ali KP", title: "Orthodontist", image: "/doctor3.jpg" },
  { id: 4, name: "Dr. Fathima Reshma", title: "Pediatric Dentist", image: "/doctor4.jpg" },
  { id: 5, name: "Dr. Haris Ahmed", title: "Endodontist", image: "/doctor5.jpg" },
  { id: 6, name: "Dr. Sameera Rahman", title: "Periodontist", image: "/doctor6.jpg" },
  { id: 7, name: "Dr. John Mathew", title: "Prosthodontist", image: "/doctor7.jpg" },
  { id: 8, name: "Dr. Ayesha Nassar", title: "Oral Surgeon", image: "/doctor8.jpg" },
];

export default function DoctorsSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scrolling distance
      const newIndex =
        direction === "left" ? Math.max(0, activeIndex - 1) : Math.min(doctors.length - 2, activeIndex + 1);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">Our Doctor's Team</h2>
      <p className="text-teal-600 text-xl font-bold">Check Out Our Experienced Doctors</p>

      {/* Chief Doctor Card */}
      {doctors
        .filter((doc) => doc.isChief)
        .map((doc) => (
          <div key={doc.id} className="flex flex-col items-center mt-6">
            <div className="w-64 h-64 rounded-3xl border-4 border-teal-500 shadow-lg overflow-hidden">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{doc.name}</h3>
            <p className="text-teal-600 font-medium">{doc.title}</p>
          </div>
        ))}

      {/* Scrollable Doctor List */}
      <div className="relative max-w-5xl mx-auto mt-8">
        <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 py-4">
          {doctors
            .filter((doc) => !doc.isChief)
            .map((doc) => (
              <div key={doc.id} className="min-w-[200px] md:min-w-[250px] bg-teal-600 text-white rounded-lg p-4 shadow-lg">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm">{doc.title}</p>
              </div>
            ))}
        </div>

        {/* Custom Circular Scrollbar (Pagination Dots) */}
        <div className="flex justify-center mt-4 space-x-2">
          {doctors.filter((doc) => !doc.isChief).map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-teal-600" : "bg-gray-300"}`} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-0 right-0 flex space-x-2 mt-2 mr-2">
          <button className="bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700" onClick={() => scroll("left")}>
            <FaArrowLeft size={14} />
          </button>
          <button className="bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700" onClick={() => scroll("right")}>
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
