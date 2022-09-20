import React from 'react'
import PrevContent from "../components/PrevContent";
import AboutContent from "../components/AboutContent";
import Services from "../components/Services";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <PrevContent />
      <AboutContent />
      <Services />
      <Achievements />
      <Footer />
    </div>
  );
}

export default Home