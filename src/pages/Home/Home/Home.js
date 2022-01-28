import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Slider from "../Banner/Slider";
import Experiences from "../Experiences/Experiences";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <Experiences></Experiences>
      <Footer></Footer>
    </div>
  );
};

export default Home;
