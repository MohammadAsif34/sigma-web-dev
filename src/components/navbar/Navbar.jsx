import React from "react";
import logo from "/vite.svg";
import Login from "./comps/Login";

const Navbar = () => {
  const navItem = [
    { name: "home", active: "true", href: "/" },
    { name: "about", active: "false", href: "/" },
    { name: "project", active: "false", href: "/" },
    { name: "portfolio", active: "false", href: "/" },
    { name: "blogs", active: "false", href: "/" },
    { name: "constact us", active: "false", href: "/" },
  ];
  return (
    <>
      <div className="w-screen bg-gray-900 h-20 fixed top-0">
        <div className="container h-full m-auto flex items-center">
          {/* logo  */}
          <div className=" w-fit h-full ">
            <img
              src={logo}
              alt=""
              style={{ height: "100%", margin: "auto", padding: "15px" }}
            />
          </div>
          {/* nav item  */}
          <div className=" flex-1 text-white">
            <ul className="px-12 flex text-lg capitalize">
              {navItem.map((item, index) => (
                <li className="mr-5 px-4 py-1 bg-gray-800 rounded-lg hover:bg-gray-700">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* login  */}
          <div>
            <div className="">
              <img src={logo} alt="" className="h-12 border rounded-full" />
            </div>
            {/* <Login /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
