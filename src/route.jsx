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
        }
      ]
    },
  ]);

  export default router;