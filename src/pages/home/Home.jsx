import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const projects = [
  { name: "password validator", href: "/password-validator", isDone: true },
  { name: "to do", href: "/to-do", isDone: true },
  { name: "stopWatch", href: "/stopwatch", isDone: false },
  { name: "abs", href: "", isDone: false },
  { name: "abs", href: "", isDone: false },
  { name: "abs", href: "", isDone: false },
  { name: "abs", href: "", isDone: false },
];
const Home = () => {
  return (
    <>
      <div className="container m-auto mt-24">
        <div className="mx-20 my-10 grid grid-cols-3 gap-5">
          {projects.map((item, index) => (
            <Link to={item.href}>
              <div className="shadow-lg border border-gray-900 rounded-lg">
                <p className="p-3 text-xl capitalize">
                  <i
                    className={`bi bi-check-circle-fill px-2 ${
                      item.isDone ? "text-green-500" : "text-red-500"
                    }`}
                  ></i>{" "}
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
