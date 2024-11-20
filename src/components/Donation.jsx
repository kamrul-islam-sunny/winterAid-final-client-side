import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Donation = ({cam}) => {
    const {id, title, description, image, division } = cam;
  return (
    <div className="md:w-[600px] lg:w-full mx-auto">
      <div className="flex md:items-center md:flex-row flex-col gap-4 border p-4 mx-4 md:mx-0 rounded-xl">
        <img
          className=" md:w-48 md:h-48 object-cover shadow-lg shadow-gray-400 rounded-xl"
          src={image}
          alt=""
        />  
        <div className="space-y-2">
          <h1 className="text-xl text-wrap font-medium text-slate-800 ">
          {title}
          </h1>
          <p className="text-sm font-medium text-gray-500">
          {description && description.slice(0,50)}....
          </p>
          <div className="flex items-center">
            <span className="text-2xl text-sky-500"><IoLocationSharp/> </span>
          <p className="text-base text-slate-500 font-semibold ">Division: <span className="text-xl text-slate-800">{division}</span></p>
          </div>
          <div className="flex justify-between items-center  py-2">
            <img className="size-10" src="/assets/donate.png" alt="" />
            <Link to={`/details/${id}`} className="btn  btn-ghost border hover:border-sky-500 text-xl bg-sky-500 hover:bg-transparent text-white hover:text-slate-900">
            Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
