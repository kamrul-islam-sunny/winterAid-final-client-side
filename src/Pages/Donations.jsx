import React from "react";
import { useLoaderData } from "react-router-dom";
import Donation from "../components/Donation";

const Donations = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-slate-800 text-center md:py-12 py-4">
        ALL Campaigns
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((cam) => (
          <Donation key={cam.id} cam={cam}></Donation>
        ))}
        {/* <Donation></Donation> */}
      </div>
    </div>
  );
};

export default Donations;
