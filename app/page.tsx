import React from "react";
import Navbar from "./Navbar";
import About from "./About";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <Navbar />
      <About/>
    </div>
  );
};

export default page;
