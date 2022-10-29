import React, { useState } from "react";
import img1 from "../images/thanks.png";
import heart from "../images/heart.png";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(6);
  const navigate = useNavigate();
  setTimeout(() => {
    setVisible(true);
    setInterval(() => setCount((count) => count - 1), 1000);
    setTimeout(()=>navigate('/'), 6000)
  }, 5000);

  return (
    <>
      <div className="flex flex-col bg-pink-400  items-center justify-center min-h-screen  ">
        <div className="px-8 py-8   ">
          <img src={img1} alt="" className="md:w-3/4 lg:w-1/2 mx-auto" />
          <h2
            className="text-center text-3xl mt-10  font-black text-white "
            style={{ fontFamily: "Inter" }}
          >
            Thank you for adopting a pet !!!
          </h2>
          <img src={heart} alt="" className="w-44 animate-pulse mx-auto" />
          {visible && (
            <p className="text-white fixed bottom-2 left-5">
              Redirecting home in {count} sec...
            </p>
          )}
        </div>
      </div>
    </>
  );
}
