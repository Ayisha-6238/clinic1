import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Root Canal Treatment",
    description:
      "A root canal is a treatment to remove infection from a tooth and save it from further damage.",
    image: "/root-canal.jpg",
  },
  {
    id: 2,
    title: "Dental Sealing",
    description:
      "Dental scaling is a cleaning procedure that removes plaque and tartar to keep your teeth and gums healthy.",
    image: "/dental-sealing.jpg",
  },
  {
    id: 3,
    title: "All Types Of Dentures",
    description:
      "Dentures are custom-made replacements for missing teeth, designed to restore your smile and improve chewing and speech.",
    image: "/dentures.jpg",
  },
  {
    id: 4,
    title: "Dental Implants",
    description:
      "Dental implants are permanent, natural-looking replacements for missing teeth that restore function and confidence.",
    image: "/implants.jpg",
  },
  {
    id: 5,
    title: "Teeth Whitening",
    description:
      "A professional teeth whitening treatment can brighten your smile and remove stains caused by coffee, tea, and smoking.",
    image: "/teeth-whitening.jpg",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scrolling distance
      const newIndex =
        direction === "left" ? Math.max(0, activeIndex - 1) : Math.min(services.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * 300, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-xl font-bold text-gray-800">
          "We push boundaries to bring your vision to reality"
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 py-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="min-w-[250px] md:min-w-[300px] bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 relative"
            >
              {/* Image at the Top */}
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Title & Description */}
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Circular Scrollbar (Pagination Dots) */}
        <div className="flex justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows on Top Right */}
        <div className="absolute top-0 right-0 flex space-x-2 mt-2 mr-2">
          <button
            className="bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            className="bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700"
            onClick={() => scroll("right")}
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
