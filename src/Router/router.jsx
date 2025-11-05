import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import Registier from "../Pages/Registier";
import Login from "../Pages/Login";
import MyBids from "../Pages/MyBids";
import MyProducts from "../Pages/MyProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "",
        element: <AllProducts />,
      },
      {
        path: "/register",
        element: <Registier />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/myBids",
        element: <MyBids />,
      },
    ],
  },
]);
