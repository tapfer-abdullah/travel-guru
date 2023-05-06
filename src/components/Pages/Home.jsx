/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./SharedPages/Header";

const Home = () => {
  return (
    <div
      style={{ height: "100%", minHeight: "100vh" }}
      className=" bg-bg-rectangle text-white bg-no-repeat bg-fixed bg-center bg-cover "
    >
      <div
       style={{backgroundColor: "rgb(0 0 0 / 60%)", minHeight: "100vh" }}
       className="px-3 md:px-32 h-full w-full"
       >
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
