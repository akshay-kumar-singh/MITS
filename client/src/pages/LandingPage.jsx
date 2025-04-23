import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Events from "../components/Home/EventsSection";
import Services from "../components/Home/ServicesSection";
import HowItWorks from "../components/Home/HowItWorksSection";
import Testimonials from "../components/Home/TestimonialsSection";
import Footer from "../components/Home/Footer";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Events />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
