import React from "react";
import toast from "react-hot-toast";

const DonateForm = () => {
  const handleForm =(e) =>{
      e.preventDefault()
      e.target.reset()
      toast.success('Thank you ! We will reach your destination soon.🎁💝')
  }
  return (
    <div onSubmit={handleForm} className="card bg-base-100 w-full my-10 max-w-xl mx-auto shrink-0 shadow-2xl shadow-sky-200 border border-sky-300 rounded-lg">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity of items</span>
          </label>
          <input
            type="text"
            placeholder="Ex: 2 jackets, 3 blankets"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Item type</span>
          </label>
          <input
            type="text"
            placeholder="Ex: blanket, jacket, sweater"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup location</span>
          </label>
          <input
            type="text"
            placeholder="Ex: House 12, Road 5, Dhanmondi, Dhaka"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Donate</button>
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
