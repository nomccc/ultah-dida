// import React from "react";
// import { Navigate, redirect, useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Halaman1 = () => {

  const navigate = useNavigate()

  function handleSalam() {
    navigate('/halaman2');
  }

  return (
    <div className="flex flex-col mx-auto my-20 w-3/5 justify-center items-center h-auto">
      <p className="my-10 font-bold text-center text-4xl">
        Hai dida! 
        Jan lupa salam dulu sebelum masuk 🚪
      </p>
      <button className="bg-pink-500 text-white p-3 rounded-xl" onClick={handleSalam}>
        Assalamualaikum
      </button>
      <img src="/img/welcome.jpeg" className="mt-10" alt="foto salam" />
    </div>
  );
};

export default Halaman1;
