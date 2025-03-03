import React from "react";
import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import AboutSection from "./Components/About";
import Footer from "./Components/Footer";
import DentalClinic from "./Components/About1";
import ServicesSection from "./Components/service";
import DoctorsSection from "./Components/Doctors";
import WhyChooseUs from "./Components/Whychoose";
import AppointmentForm from "./Components/Appoinment";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DentalClinic />
      <ServicesSection/>
      <DoctorsSection/>
      <WhyChooseUs/>
      <AppointmentForm/>
      <Footer />
    </div>
  );
};

export default App;