import React from "react";
import Header1 from "../Components/Header1";
import Header2 from "../Components/Header2";
import HeroImage from "./HeroImage";
import Featured from "./Featured";
import Banner from "./Banner";
import Popular from "./Popular";
import DailyBest from "./DailyBest";
import Details from "./Details";
import Footer from "../Components/Footer";

function Home1() {
  return (
    <>
      <Header1/>
      <Header2/>
      <HeroImage/>
      <Featured/>
      <Banner/>
      <Popular/>
      <DailyBest/>
      <Details/>
      <Footer/>
    </>
  );
}

export default Home1;
