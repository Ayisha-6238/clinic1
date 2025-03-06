import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Icons
import logo from "../assets/759e25bf956a279e86c9ce07b8205ceb.png"; // Clinic Logo
import "./style.css"; // CSS file for additional styles

const services = [
  { id: 1, title: "Root Canal Treatment", image: "/dental6.png", description: "A procedure to save and repair a badly decayed tooth." },
  { id: 2, title: "Dental Scaling", image: "/dental23.png", description: "Deep cleaning to remove plaque and tartar buildup." },
  { id: 3, title: "Dentures", image: "/dental7.png", description: "Custom-made replacements for missing teeth." },
  { id: 4, title: "Dental Implants", image: "/dental8.png", description: "Permanent solution for missing teeth using artificial roots." },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track visible service index

  // Scroll functions
  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      navigate(`/services/${services[0].id}`); // Go to first service page
    }
  };

  const scrollRight = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
    } else {
      navigate(`/services/${services[services.length - 1].id}`); // Go to last service page
    }
  };

  return (
    <section className="bg-teal-50 py-12 relative">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-teal-800">Our Services</h2>
        <p className="text-lg text-gray-600">Expert dental care for a healthy smile.</p>
      </div>

      {/* Scroll Arrows (Moved to bottom-right) */}
      <div className="flex justify-end pr-12 mb-2 space-x-3">
        <button onClick={scrollLeft} className="bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition">
          <FaArrowLeft size={22} />
        </button>
        <button onClick={scrollRight} className="bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition">
          <FaArrowRight size={22} />
        </button>
      </div>

      {/* Scrollable Services Section */}
      <div ref={scrollRef} className="w-full max-w-6xl mx-auto overflow-x-auto flex space-x-6 px-4 scrollbar-hide scroll-smooth rounded-lg">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate(`/service/${service.id}`)}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Service Image */}
            <img src={service.image} alt={service.title} className="w-full h-44 object-cover rounded-lg transition-opacity duration-300" />

            {/* Hover Effect (Fades in) */}
            {hoveredService === service.id && (
              <div className="absolute inset-0 bg-teal-900 bg-opacity-90 text-white flex flex-col items-center justify-center p-4 rounded-lg transition-opacity duration-300">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-center mt-2">{service.description}</p>
              </div>
            )}

            {/* Service Title */}
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

            {/* Clinic Logo (Top Right of Card) */}
            <img src={logo} alt="Clinic Logo" className="absolute top-2 right-2 w-10 h-10 rounded-full border border-gray-300 shadow-md" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
