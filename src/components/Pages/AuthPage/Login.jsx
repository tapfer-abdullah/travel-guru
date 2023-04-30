/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { user, Login } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");

  const handleSingin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    Login(email, password)
    .then(result =>{
        console.log(result.user)
        setErrorM("");
    })
    .catch(error =>{
        setErrorM(error.message);
    })
  }

  return (
    <div
      className="w-1/3 mt-24 py-9 px-14 mx-auto text-center rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(33 65 72 / 40%), rgb(113 189 178))",
      }}
    >
      <h3 className="text-2xl font-semibold mb-9">Please Log in</h3>
      <form onSubmit={handleSingin} className="text-left">
        <div>
          <h4 className="text-lg font-medium mt-4 mb-1">Your Email</h4>
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            className="input input-bordered w-full text-black"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mt-4 mb-1">Your Password</h4>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full text-black"
          />
        </div>
        <div className="flex justify-between mt-6 mb-10">
          <div>
            <input type="checkbox" name="checkBox" id="" /> Remember me
          </div>
          <p className="text-warning">
            <Link>Forgot Password</Link>
          </p>
        </div>
        <input
          className="btn bg-my-primary border-none w-full"
          type="submit"
          value="Register"
        />
        {/* <button className='w-full'>
                    <Link className="btn bg-my-primary border-none w-full">Log in</Link>
                </button> */}
        {errorM && <p className="my-1 text-danger">{errorM}</p>}
        <p className="my-4">
          Don't have an account?
          <Link to="/register" className="text-warning">
            {" "}
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
