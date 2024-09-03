import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <>
      <div className="relative min-h-screen flex w-full">
        <div className="absolute left-0 top-0 w-full lg:w-3/4 h-full bg-white"></div>
        <div className="lg:absolute  right-0 top-0 lg:w-1/4 h-full bg-blue-600 blue-background-section"></div>
        <div className="relative z-10 w-full sm:px-0 flex flex-col">
          <Navbar />
          <Home />
        </div>
      </div>
    </>
  );
};

export default Container;
