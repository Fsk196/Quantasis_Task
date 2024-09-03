import React from "react";
import { TiTick } from "react-icons/ti";

const LeftSide = () => {
  return (
    <>
      <div className="relative w-full h-screen flex">
        <div className="relative w-full h-full">
          <img
            src="/src/assets/rectangle.png"
            alt="rectangle"
            className="absolute top-1/2 w-[300] h-[450]  right-0 transform  -translate-y-1/2"
          />
        </div>
        <div className="absolute bg-blue-50 w-56 h-24 rounded-tr-3xl rounded-bl-3xl lg:top-1/2 lg:left-40 transform  -translate-y-1/2 flex flex-col justify-center">
          <h2 className="flex items-center text-sm">
            <TiTick />
            Get 20% off on every 1st month
          </h2>
          <h2 className="flex items-center text-sm">
            <TiTick />
            Experts person
          </h2>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
