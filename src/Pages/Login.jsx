import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';


const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const handleForm = (e) =>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    return (
        <div onSubmit={handleForm} className="min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg rounded-lg p-10 shrink-0 shadow-2xl shadow-sky-300 border border-sky-200">
          <h2 className="text-2xl font-semibold text-center">
            Login your account
          </h2>
          <form  className="card-body">
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
               {/* {error.login && <label className="label text-sm text-red-600">{error.login}</label>} */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost bg-sky-500  text-white hover:text-slate-950">Login</button>
            </div>
          </form>
          <h2 className="font-normal text-center">
            Dont’t Have An Account ?{" "}
            <Link className="text-sky-500" to={"/auth/register"}>
              Register
            </Link>
          </h2>
        </div>
      </div>
    );
};

export default Login;