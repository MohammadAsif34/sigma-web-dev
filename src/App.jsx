import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/navbar/comps/Login";
import PasswordValidator from "./components/mini-projects/password-validator/PasswordValidator";
import Error404 from "./components/404error/Error404";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/password-validator", element: <PasswordValidator /> },
      { path: "/password-validator", element: <PasswordValidator /> },
    ],
  },
  { path: "*", element: <Error404 /> },
  {
    path: "/login",
    element: <Login />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
