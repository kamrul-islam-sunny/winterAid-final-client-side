import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FcBusinessContact } from "react-icons/fc";
import DonateForm from "./DonateForm";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    const findData = data.find((cam) => cam.id === parseInt(id));
    setSingleData(findData);
  }, [data, singleData]);
  const { title, image, status, description, contactInfo } = singleData;
  return (
    <div className="">
      <div className="card bg-base-100  max-w-3xl md:mx-auto my-10 mx-4 shadow-2xl shadow-sky-200">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body pb-2">
        <h2 className="card-title">
          {title}
          <div className="badge badge-success py-4 text-white">{status}</div>
        </h2>
        <p>{description}</p>
        <p className="flex items-center gap-4 text-blue-700">
          <span className="text-3xl">
            <FcBusinessContact />
          </span>{" "}
          {contactInfo}
        </p>
      </div>
      {/* Donate component */}
      <DonateForm></DonateForm>
    </div>
  
    </div>
  );
};

export default Details;
