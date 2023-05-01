/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../../Recourse/logo.png";
import { AuthContext } from "../AuthPage/AuthProvider";

const Header = () => {
  const {user, Logout} = useContext(AuthContext);
  // console.log(user)
  const location = useLocation();

  const handleLogOut = () =>{
    Logout()
    .then(() =>{

    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="pt-9">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <input
                  type="text"
                  placeholder="Search your Destination..."
                className="input input-bordered"
                />
              </li>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Destination</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" ms-4 md:ms-0 w-28 h-14">
            <img style={{backgroundColor: "rgba(248, 248, 248, 0.6)", padding: "5px 10px", borderRadius: "10px"}} src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-6">
              {location.pathname != '/destinations' && <input
                style={{backgroundColor: "rgb(79 79 79 / 60%)"}}
                type="text"
                placeholder="Search your Destination..."
                className="input input-bordered bg-transparent"
              />}
            </li>
            <li className="mx-6">
              <Link>News</Link>
            </li>
            <li className="mx-6">
              <Link to= "/destinations">Destination</Link>
            </li>
            <li className="mx-6">
              <Link>Blog</Link>
            </li>
            <li className="mx-6">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {user && <h3 className="mx-2">{user?.email}</h3>}
          {user ? <Link onClick={handleLogOut} className="btn bg-my-primary border-none">Log out</Link>
          :
          <Link to="/login" className="btn bg-my-primary border-none">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
