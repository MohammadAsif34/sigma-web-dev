import React from "react";
import { Link } from "react-router-dom";
import error404 from "/error404.png";

const Error404 = () => {
  return (
    <div
      className="bg-gray-900 text-white flex justify-center items-center flex-col"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div>
        <img src={error404} alt="" />
      </div>
      <h1 className="text-4xl font-bold">404 NOT FOUND</h1>
      <h2 className="mb-10 text-6xl font-extrabold">
        Woops! Page doesn't exist.
      </h2>
      <Link to="/">
        <span className="block  p-3 rounded-lg bg-blue-500 font-bold">
          <i className="bi bi-arrow-left"></i> Back to Home
        </span>
      </Link>
    </div>
  );
};

export default Error404;
