import React from "react";
import Navbar from "./navbar";
import pic1 from "../images/cat-and-dog.png";
import { Link } from 'react-router-dom'
import Footer from "./footer";
import AboutUs from "./Aboutus";

export default function Home() {
  return (
    <>
    <div className=" clip-right bg-gradient-to-b from-blue-400 to-blue-600 via-blue-500 ">
      <Navbar></Navbar>
      <div className=" flex flex-col  py-20 md:py-28  clip-right z-50 px-8 bg-gradient-to-b from-blue-400 to-blue-600 via-blue-500">
        <div className="object-contain  lg:flex lg:flex-row">
          <div className="mb-12">
            <div
              className="text-center text-4xl md:text-5xl font-bold text-white mb-10 md:mb-12 "
              style={{ fontFamily: "Inter" }}
            >
              <span className="text-white">Don't buy</span>,{" "}
              <span className="text-yellow-300">adopt</span>
            </div>
            <div className="text-center mb-6 md:mb-10 px-4 md:px-16 text-lg md:text-xl font-semibold text-gray-200 leading-loose md:leading-loose" style={{ fontFamily: "Inter" }}>
            Adopting one animal won't change the world, but for that animal the world will change
            </div>
            <div className="text-center space-x-4">

            <Link to="/save-life" className="px-3 py-3 text-white font-bold text-xl rounded-full bg-yellow-500 text-center hover:bg-pink-500 transition-all duration-300">save a life</Link>
            <Link to="/why-adopt" className="px-3 py-3 text-white font-bold text-xl rounded-full bg-red-300 text-center hover:bg-pink-500 transition-all duration-300">why adopt ?</Link>

            </div>
          </div>
          <div className="md:pb-8">
            <img src={pic1} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
    <AboutUs></AboutUs>
    <Footer></Footer>
    </>

  );
}
