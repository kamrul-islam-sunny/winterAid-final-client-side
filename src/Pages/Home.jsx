import React from "react";
import Banner from "../components/banner";
import About from "../components/About";
import OurVolunteer from "../components/OurVolunteer";
import Activity from "../components/Activity";

const Home = () => {
  return (
    
      <div className="max-w-6xl mx-auto">
        {/* banner section */}
        <Banner></Banner>

        {/* About section */}
        <About></About>
        {/* Our Volunteer  */}
        <OurVolunteer></OurVolunteer>
        {/* Our sponsor */}
      <Activity></Activity>
      <br />
      <br /><br /><br />
    </div>
  );
};

export default Home;
