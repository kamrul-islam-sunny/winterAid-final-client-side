import React from "react";

const About = () => {
  return (
    <div className="border-t-2 border-b-2 my-8 px-4 lg:px-0">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-slate-800 text-center md:py-8 py-4">
        About Us
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            <div className="p-6  border rounded-xl space-y-2 shadow-lg shadow-sky-200">
                <img className="size-20" src="../src/assets/target.png" alt="" />
                <h3 className="text-2xl font-bold text-slate-800">Our mission</h3>
                <p className="text-base font-normal text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quibusdam nobis cum facilis et nemo eligendi! Exercitationem, ea consequuntur?</p>
            </div>
            <div className="p-6 border rounded-xl space-y-2 shadow-lg shadow-sky-200">
                <img className="size-20" src="../../src/assets/light-bulb.png" alt="" />
                <h3 className="text-2xl font-bold text-slate-800">Our mission</h3>
                <p className="text-base font-normal text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quibusdam nobis cum facilis et nemo eligendi! Exercitationem, ea consequuntur?</p>
            </div>
            <div className="py-4 px-2 border">
                <h3 className="text-2xl font-bold text-slate-800">Our mission</h3>
                <p className="text-base font-normal text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quibusdam nobis cum facilis et nemo eligendi! Exercitationem, ea consequuntur?</p>
            </div>
        </div>
    </div>
  );
};

export default About;
