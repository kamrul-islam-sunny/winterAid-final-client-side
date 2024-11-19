import React from "react";

const OurVolunteer = () => {
  return (
    <div className="py-10 border-b-2">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-slate-800 text-center md:py-8 py-4">
        Our Volunteer
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        <div className="">
          <img
            className="w-64 h-64 rounded-full border"
            src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
            alt=""
          />
          <div className=" text-center pt-4">
            <h1 className="text-xl font-normal text-slate-800">
            Emily Johnson
            </h1>
            <p className="text-gray-600 font-bold">Volunteer</p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-full w-64 h-64 object-cover border"
            src="https://t4.ftcdn.net/jpg/02/85/98/31/360_F_285983167_OTSjTSeRhqJ7b4TPxlQ80mC9zTiDCzMQ.jpg"
            alt=""
          />
           <div className=" text-center pt-4">
            <h1 className="text-xl font-normal text-slate-800">
            Aisha Ahmed
            </h1>
            <p className="text-gray-600 font-bold">Volunteer</p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-full w-64 h-64 object-cover border"
            src="https://img.freepik.com/premium-photo/young-handsome-man-isolated-white-background_185193-82024.jpg"
            alt=""
          />
           <div className=" text-center pt-4">
            <h1 className="text-xl font-normal text-slate-800">
            Michael Brown
            </h1>
            <p className="text-gray-600 font-bold">Volunteer</p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-full w-64 h-64 object-cover border"
            src="https://t4.ftcdn.net/jpg/04/99/61/55/360_F_499615577_AFqaO7pozqXB9VQnSsxxgLJE1sgGrCgP.jpg"
            alt=""
          />
            <div className=" text-center pt-4">
            <h1 className="text-xl font-normal text-slate-800">
            Emily Johnson
            </h1>
            <p className="text-gray-600 font-bold">Volunteer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVolunteer;
