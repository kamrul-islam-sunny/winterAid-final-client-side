import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import toast from "react-hot-toast";

const Register = () => {
    const {userRegister} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        // get from data
        const from = new FormData(e.target);
        const name = from.get("name");
        const photo = from.get("photo");
        const email = from.get("email");
        const password = from.get("password");
        userRegister(email, password)
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch(err =>{
            toast.error(err.message)
            console.log(err.message)
        })
      };
  return (
    <div className="min-h-screen flex justify-center my-10 items-center ">
      <div className="card bg-base-100 w-full max-w-lg rounded-lg p-10 shrink-0 shadow-2xl shadow-sky-300 border border-sky-200">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-ghost bg-sky-500  text-white hover:text-slate-950">Register</button>
          </div>
        </form>
        <h2 className="font-normal text-center">
          Already Have an account ?
          <Link className="text-sky-500" to={"/auth/login"}>
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Register;
