import React from "react";
import { CiSearch } from "react-icons/ci";
import LeftSide from "./LeftSide";

const Home = () => {
  return (
    <>
      <div className="container flex justify-between items-center w-full mx-auto h-full">
        <div className="relative lg:w-1/2 px-2">
          <div className="absolute -top-20 right-14 sm:right-10">
            <img src="/src/assets/Circle.png" alt="wave" width={30} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
            We Provide Best
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 ">
            Marketing Solution
          </h2>
          <div className="w-10/12">
            <p className="mt-10 text-gray-500 text-lg text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, sint nam! Sequi eaque vero, tempore odit id
              praesentium, natus illum sint, aspernatur voluptatibus molestiae
              perferendis. Tempore quae explicabo rerum, excepturi totam quod
              quaerat dolore. Eum esse accusamus pariatur quam modi!
            </p>
          </div>
          <div className="mt-10 w-fit p-1 rounded bg-blue-200/20 flex justify-between sm:space-x-40">
            <div className="flex items-center text-lg pl-2 sm:pl-4">
              <CiSearch className="" />
              <input
                type="text"
                className="bg-transparent text-base px-2 py-3 flex-grow focus:outline-none text-blue-500"
                placeholder="What services you want"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-800 px-3 sm:px-8 py-3 rounded-sm text-white">
              Search Here
            </button>
          </div>

          <div className="absolute -bottom-28 left-20">
            <img src="/src/assets/wave.png" alt="wave" />
          </div>
          <div className="absolute -bottom-28 right-10">
            <img src="/src/assets/Dots.png" alt="wave" width={60} height={30} />
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block h-full">
          <LeftSide />
        </div>
      </div>
    </>
  );
};

export default Home;
