import React, { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const UpdateForm = () => {
  const { UpdateUserProfile } = useContext(AuthContext);
  const updateProfile = (e) => {
    e.preventDefault()
    UpdateUserProfile();
  };
  return (
    <div className="flex flex-col justify-center items-center py-10">
        <h2 className="text-2xl py-4 font-semibold text-center">
          Update Your Profile
        </h2>
      <div class="card bg-base-100 border  w-full max-w-sm shrink-0 
      shadow-2xl">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Photo URl</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo url."
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
