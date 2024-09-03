import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="container mx-auto pt-8 px-4 sm:px-0 flex flex-row items-center justify-between">
        <div className="font-bold text-3xl text-blue-600">Your Logo</div>

        {/* Desktop Navbar */}
        <div className="lg:flex hidden items-center justify-between space-x-10">
          <nav className="flex space-x-12 text-xl font-medium">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Courses
            </a>
            <a href="#" className="nav-link">
              Pages
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>
          <button className="bg-white text-blue-600 px-10 py-3 font-medium text-lg rounded-md hover:bg-blue-50">
            Register Now
          </button>
        </div>

        {/* Mobile Navbar  */}

        <div className="lg:hidden flex items-center z-30">
          <button onClick={handleMenu} className="text-blue-600 text-2xl">
            {isMenuOpen ? (
              <HiX className="text-3xl hover:text-white" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden z-20 fixed top-0 left-0 w-full h-full bg-blue-400 flex flex-col items-center justify-center space-y-6 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col space-y-4 text-xl font-medium items-center">
            <a href="#" className="text-white hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Courses
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Pages
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Contact
            </a>
          </nav>
          <button className="bg-white hover:bg-blue-600 hover:text-white text-blue-600 px-10 py-3 text-xl rounded-md">
            Register Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
