/* eslint-disable no-empty */
// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { loading, Register } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");
  const [passError, setPassError] = useState("");

  const handleSinUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if(password != confirmPassword){
        setErrorM("Password does not match!");
        setPassError("Password does not match!");
        return;
    }
    else{
        setErrorM("");
        setPassError("");
    }

    console.log(firstName, lastName, email, password, confirmPassword)

    Register(email, password)
    .then(result => {
        console.log("Register Successful", result.user)
        setErrorM("");
    })
    .catch(error =>{
        console.log(error)
        setErrorM(error.message);
    })
  };

  return (
    <div
      className="w-1/3 mt-4 py-4 px-14 mx-auto text-center rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(33 65 72 / 40%), rgb(113 189 178))",
      }}
    >
      <h3 className="text-2xl font-semibold mb-5">Please Register</h3>
      <form onSubmit={handleSinUp} className="text-left">
        <div>
          <h4 className="text-lg font-medium mt-2 mb-1">First name</h4>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input input-bordered w-full text-black"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mt-2 mb-1">Last name</h4>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input input-bordered w-full text-black"
          />
        </div>

        <div>
          <h4 className="text-lg font-medium mt-2 mb-1">Your Email</h4>
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            className="input input-bordered w-full text-black"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mt-2 mb-1">Your Password</h4>
          <input
            type="password"
            name="password"
            placeholder="Password"
            // className="input input-bordered w-full text-black"
            className = {`input input-bordered w-full text-black ${passError && "border-danger"}`}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mt-2 mb-1">Confirm Password</h4>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className= {`input input-bordered w-full text-black ${passError && "border-danger"}`}
          />
        </div>

        <input className="btn bg-my-primary border-none w-full mt-3" type="submit" value="Register" >
        {/* <button type="submit" className="w-full mt-3">
          <Link className="btn bg-my-primary border-none w-full">
            Register
          </Link>
        </button>     */}
        </input>
        {errorM && (
          <p className="my-1 text-danger">
            {errorM}
          </p>
        )}
        <p className="my-2">
          Already have an account?
          <Link to="/login" className="text-warning">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
