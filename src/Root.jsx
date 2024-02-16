import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import Edit from "./pages/Edit";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <>
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
    ],
  },
]);

function Root() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default Root;
