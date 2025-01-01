import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Donation from "../components/Donation";
import axios from "axios";

const Donations = () => {
  const [allData, setAllData] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(false);
  const [currentData, setCurrentData] = useState(false);
  useEffect(() => {
    axios.get(`https://backend-winter-aid.vercel.app/allCampaign`).then((res) => {
      setAllData(res.data);
    });
  }, [currentData]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      setAllData(allData);
    }
    axios
      .get(`https://backend-winter-aid.vercel.app
/search?query=${value}`)
      .then((res) => setAllData(res.data));
  };

  const handleSortAmount = () => {
    setSort(!sort);

    axios
      .get(`https://backend-winter-aid.vercel.app
/sort?donationAmount=amount`)
      .then((res) => setAllData(res.data));
  };

  return (
    <div className="pb-4 max-w-6xl mx-auto">
      {/* <Helmet>
          <title>All lost and found item</title>
        </Helmet> */}
      <div className="flex justify-center py-10 mx-4">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="search "
          className="input input-bordered w-full max-w-md "
        />
      </div>
      <div className="pb-3">
        <button
          className={`btn btn-sm ${
            sort ? "btn-success ml-4 lg:ml-0" : "btn-neutral ml-4 lg:ml-0"
          }`}
          onClick={handleSortAmount}
        >
          Sorted by Amount
        </button>
        <button
          className='btn btn-sm ml-2 bg-red-700 hover:bg-red-600 text-white'
          onClick={()=>setCurrentData(!currentData)}
        >
          reset
        </button>
      </div>
      {allData?.length > 0 ? (
        <div className="grid px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allData.map((item) => (
            <Donation key={item._id} item={item}></Donation>
          ))}
        </div>
      ) : (
        <p className="text-4xl font-bold text-center">no data</p>
      )}
    </div>
  );
};

export default Donations;
