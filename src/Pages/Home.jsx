import React from "react";
import Banner from "../components/banner";
import About from "../components/About";
import OurVolunteer from "../components/OurVolunteer";
import Activity from "../components/Activity";
import HowIt from "../components/HowIt";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* banner section */}
      <Banner></Banner>

      {/* About section */}
      <About></About>

       {/* How it is work */}
       <HowIt></HowIt>

      {/* Our Volunteer  */}
      <OurVolunteer></OurVolunteer>

      {/* Our sponsor */}
      <Activity></Activity>

     
    </div>
  );
};

export default Home;
