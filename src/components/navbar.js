import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import Login from "./login";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [top, setTop] = useState("");
  const [middle, setMiddle] = useState("bg-white");
  const [bottom, setBottom] = useState("");
  const [mobileMenu, setMobileMenu] = useState("h-0 invisible");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleClick = (e) => {
    if (menuOpen) {
      setTop("");
      setBottom("");
      setMiddle("bg-white");
      setMobileMenu("h-0 invisible");
      setMenuOpen(false);
    } else {
      setTop("-translate-x-1 translate-y-2 rotate-45");
      setMiddle("-translate-x-5 bg-transparent");
      setBottom("-translate-x-1 -translate-y-1  -rotate-45");
      setMobileMenu("h-80 pt-6 md:h-[22rem] flex");
      setMenuOpen(true);
    }
  };
  return (
    <>
      <nav
        className="pl-3 pr-2 py-3 pb-2  flex bg-blue-400  -z-50 "
        id="nav-top"
      >
        <div className=" w-1/6">
          <img src={logo} alt="" className="object-contain md:w-20" />
        </div>
        {/* anchor links */}
        <div
          className=" hidden w-5/6 lg:flex items-center justify-end  pr-8 space-x-4 text-white font-semibold"
          style={{ fontFamily: "Inter" }}
        >
          <div>
            <Link
              to="/"
              className=" hover:bg-cyan-400 px-3 py-2 rounded-full transition-all duration-300"
            >
              home
            </Link>
          </div>
          <div>
            <Link
              to="/why-adopt"
              className=" hover:bg-cyan-400 px-3 py-2 rounded-full transition-all duration-300"
            >
              about us
            </Link>
          </div>
          <div>
            <Link
              to="/save-life"
              className=" hover:bg-cyan-400 px-3 py-2 rounded-full transition-all duration-300"
            >
              save a life
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className=" hover:bg-cyan-400 px-3 py-2 rounded-full transition-all duration-300"
            >
              blogs
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className=" hover:bg-cyan-400 px-3 py-2 rounded-full transition-all duration-300"
            >
              shop
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              className="ml-2 bg-purple-500 px-4 py-1 rounded-full transition-all duration-300 hover:bg-pink-500"
            >
              login
            </Link>
          </div>

          <button className="pl-1">
            {dark ? (
              <FaMoon
                className=" text-xl font-normal uppercase"
                onClick={() => setDark(false)}
              />
            ) : (
              <BsSunFill
                className=" text-xl font-normal uppercase"
                onClick={() => setDark(true)}
              />
            )}
          </button>
        </div>
        {/* menu button */}
        <div
          className=" w-5/6 lg:hidden self-center flex flex-col items-end pr-4 space-y-1 "
          onClick={() => handleClick()}
        >
          <div
            className={`w-6 h-[2px] lg:hidden bg-white rounded-md transition-all duration-700 ease-in-out ${top}`}
          ></div>
          <div
            className={`w-6 h-[2px] lg:hidden  rounded-md transition-all duration-700 ease-in-out ${middle}`}
          ></div>
          <div
            className={`w-6 h-[2px] lg:hidden bg-white rounded-md transition-all duration-700 ease-in-out ${bottom}`}
          ></div>
        </div>

        {/* menu button ends */}
      </nav>
      {/* hamburg menu */}
      <div
        className={` lg:hidden md:text-lg flex flex-col  bg-gradient-to-b from-blue-400 to-blue-500 space-y-4 items-center -z-10   ${mobileMenu} text-white font-bold transition-all  duration-500 ease-in-out`}
        style={{ fontFamily: "Inter" }}
      >
        <Link to="/">home</Link>
        <Link to="/why-adopt">about us</Link>
        <Link to="/save-life">save a life</Link>
        <Link to="#">blogs</Link>
        <Link to="#">shop</Link>
        <Link
          to="/login"
          className="rounded-xl px-3 py-1 bg-white text-blue-400 self-center hover:scale-105 transition-all duration-300 ease-in"
        >
          <a>Login</a>
        </Link>
        <button>
          {dark ? (
            <FaMoon
              className=" text-xl font-normal uppercase"
              onClick={() => setDark(false)}
            />
          ) : (
            <BsSunFill
              className=" text-xl font-normal uppercase"
              onClick={() => setDark(true)}
            />
          )}
        </button>
      </div>
    </>
  );
}
