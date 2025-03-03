import { useState } from 'react';
import image1 from "./3f142284a68baee0fababc3e47bd20aa.png";
import image2 from "./2434a5ab6dfad8950b2f81b95aac4292.png";
import image3 from "./265c624eeb0d62cb5d69ed874c2f9a6a.png" ;

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2, image3];

  const handleImageChange = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Navbar */}
      {/* Animated Background Images */}
      <div className="relative h-full w-full" onClick={handleImageChange}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dental care ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
              activeImage === index ? 'bg-opacity-65' : 'opacity-0'
            } animate-float`}
          />
        ))}
        {/* Hero Content */}
        <div className="absolute left-64 top-1/4 bg-teal-700 text-white p-6 rounded-2xl opacity-60 shadow-lg max-w-screen-lg">
        <h1 className="text-2xl font-bold">
          Caring for Your <span className="text-yellow-300">Smile</span>,One
          <p className="text-3xl md:text-4xl font-semibold animate-slide-up delay-100">
              Visit at a Time!
            </p>
        </h1>
        <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md text-center">
          Explore Our Services
        </button>
      </div>
      {/* SVG Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          fill="white"
        >
          <path
            d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;