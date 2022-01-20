import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Navbar from "../../components/Navbar/Navbar";
import SingleCard from "../../components/SingleCard/SingleCard";

import "./Home.scss";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />

      {/* Service Section */}
      <div className="section">
          <div className="section-header">
            <h3 className="section-title">SERVICES</h3>
            <p className="section-timeline">Let's Turn Coffee into Code</p>.
          </div>
            <SingleCard />
        </div>
      </div>
  );
};

export default Home;
