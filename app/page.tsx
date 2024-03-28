"use client";
// import React from "react";
import Navbar from "./Navbar";
import About from "./About";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <div style={{ textAlign: "left" }}>
        <img src="./walelogo.png" className="w-44 h-24 sm:mx-auto" alt="Logo" />
      </div>

      <Navbar />
      {/* <About/> */}
    </div>
  );
};

export default page;
