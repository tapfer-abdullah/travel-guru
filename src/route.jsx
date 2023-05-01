/* eslint-disable no-unused-vars */


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./components/Pages/Home";
import Header from "./components/Pages/SharedPages/Header";
import HomeContents from "./components/Pages/HomeContents";
import Login from "./components/Pages/AuthPage/Login";
import Register from "./components/Pages/AuthPage/Register";
import Booking from "./components/Pages/Booking";
import Destinations from "./components/Pages/Destinations";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <HomeContents></HomeContents>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "/booking/:id",
          element: <Booking></Booking>,
          loader: ({params}) => fetch(`http://localhost:5000/destination/${params.id}`)
        }
      ]
    },
    {
      path: "/destinations",
      element: <Destinations></Destinations>,
      loader: () => fetch("http://localhost:5000/destinations")
    }
  ]);

  export default router;