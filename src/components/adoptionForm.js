import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { data } from "./adoptionList";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import AddressInput from "./addressInput";

export default function AdoptionForm() {
  const navigate = useNavigate();
  const id = localStorage.getItem("Id");
  const adoptee = data.filter((item) => item.id == id)[0];

  const [item, setItem] = useState({fname:'', lname:'', contact1:'', contact2:'', email:'', address:'' });
  const handleChange = ({ currentTarget: input }) => {
    setItem({ ...item, [input.name]: input.value });
};
console.log(item);
//confirm exit
const beforeUnloadListener = (e)=>{
  return  (e.returnValue = null);
}

useEffect(()=>{
  if (item) {
    window.addEventListener("beforeunload", beforeUnloadListener, {
      capture: true
    });
  } else {
    window.removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true
    });
  }

  return () => {
    window.removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true
    });
  };
},[]);

//confirm exit
  return (
    <>
      <Navbar></Navbar>
      <div className="px-12 py-8 mx-auto md:px-32 lg:px-36 ">
        <h2 className="text-2xl font-bold text-yellow-500 lg:w-[78%]  lg:mx-auto">Adoption form</h2>
        <form action="" onSubmit={()=>navigate('/thank-you')}>
          <p className="text-lg font-semibold mt-6 text-blue-400 lg:w-[78%]  lg:mx-auto">
            Adoptee details
          </p>
          <div className="flex flex-col  mt-8 lg:flex-row-reverse lg:w-[78%] lg:mx-auto">
            <img
              src={adoptee.img}
              alt=""
              className="rounded-full h-64 w-64 object-cover mx-auto"
            />
            <div className="flex flex-col space-y-2 mt-8 mx-auto lg:mx-0">
              <p>
                <span className="font-bold">Name :</span>&nbsp;&nbsp;
                {adoptee.name}
              </p>
              <p>
                <span className="font-bold">Sex :</span>&nbsp;&nbsp;
                {adoptee.sex}
              </p>
              <p>
                <span className="font-bold">Age :</span>&nbsp;&nbsp;
                {adoptee.age}
              </p>
            </div>
          </div>
          <div className="h-[2px] bg-gray-600 mt-8 lg:w-[85%]  lg:mx-auto"></div>
          <p className="text-lg mt-10 mb-2 font-semibold text-blue-400 lg:w-[56%] lg:mx-auto">
            Adopter details
          </p>
          <p className="mb-6 text-gray-600  lg:mt-8 lg:w-[56%]  lg:mx-auto">
            *Please enter your details correctly
          </p>
          <div className="flex flex-col space-y-3 lg:w-[56%] lg:mx-auto">
            <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4 ">
              <div className="flex flex-col space-y-2 lg:w-1/2 ">
                <label htmlFor="fname" className="inline-flex items-center">
                  <HiOutlineUserCircle />
                  &nbsp;First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={item.fname}
                  className="text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
                  placeholder="first name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-2 lg:justify-start lg:w-1/2">
                <label htmlFor="fname" className="inline-flex items-center">
                  <HiOutlineUserCircle />
                  &nbsp;Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={item.lname}
                  className="text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
                  placeholder="last name"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="fname" className="inline-flex items-center">
                <MdOutlineLocationOn />
                &nbsp;Address
              </label>

              <AddressInput></AddressInput>
            </div>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4">
              <div className="flex flex-col space-y-2 lg:w-1/2">
                <label htmlFor="fname" className="inline-flex items-center">
                  <FiPhone />
                  &nbsp;Contact number
                </label>
                <input
                  type="text"
                  name="contact1"
                  id="contact1"
                  value={item.contact1}
                  className="text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
                  placeholder="contact number"
                  pattern="^(\+?977)?[9][6-9]\d{8}$|(^(01\-?)?[1-9]\d{6}$)"
                  required onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-2 lg:w-1/2">
                <label htmlFor="fname" className="inline-flex items-center">
                  <FiPhone />
                  &nbsp;Contact number 2
                </label>
                <input
                  type="text"
                  name="contact2"
                  id="contact2"
                  value={item.contact2}
                  className="text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md [&:not(:placeholder-shown)]:valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
                  placeholder="contact number 2" onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="fname" className="inline-flex items-center">
              <HiOutlineMail />
              &nbsp;Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={item.email}
              className=" max-w-full text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
              placeholder="email address"
              pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
              required onChange={handleChange}
            />
          </div>
          <div className="lg:w-[56%] lg:mx-auto">

          <input type="submit" value="submit" className=" bg-blue-400 w-auto h-auto rounded-md text-white font-semibold px-2 py-1 mt-6 border-0 shadow-sm shadow-blue-900 hover:bg-blue-600 transition-all duration-300"/>
         
          </div>
          <br />
          <br />
          
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
