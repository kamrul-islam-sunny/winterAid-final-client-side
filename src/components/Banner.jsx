import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 lg:py-12 py-8 px-4 ">
      {/* banner content */}
      <div className="flex flex-col justify-center text-center md:text-start lg:space-y-4 space-y-3" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="md:text-6xl text-3xl font-bold text-slate-700">
          Wrap Someone in Warmth This{" "}
          <span className="text-sky-500">Winter</span>
        </h1>
        <p className="md:text-base text-sm font-medium leading-6 text-slate-500">
          This winter, many face the cold without warm clothing. Your donation
          of a coat, blanket, or gloves can bring hope and comfort. Together,
          let’s share warmth and transform lives—one gift at a time.
        </p>
        <p className="font-Playfair md:text-lg text-sm font-black italic">
          "The believer’s shade on the Day of Resurrection will be his charity"
          <span className="font-medium">(Al-Tirmidhi)</span>
        </p>
        <div className="">
          <button className="btn bg-sky-500 text-white text-lg font-medium">
            Donate now
          </button>
        </div>
      </div>
      {/* banner slider */}
      <div className="md:w-1/2 w-full" data-aos="zoom-in" data-aos-duration="3000" >
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
