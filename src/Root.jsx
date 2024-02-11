import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function Root() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
