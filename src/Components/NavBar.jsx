import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdPermDeviceInformation } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Drawer  */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {/* Name styling */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
        Escape
        <span className="text-red-600">Adventures</span>
      </h1>
      {/* Book Now Button */}
      <button className="hidden md:flex items-center py-2 px-4 bg-red-600 rounded-full  text-black cursor-pointer hover:bg-black hover:text-white">
        <BsFillCalendarFill className="mr-2" />
        Book Now
      </button>

      {/* Mobile Menu  */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 
          cursor-pointer"
        />

        <h2 className="text-2xl font-bold p-4">
          Escape<span className="text-red-600">Adventure</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <MdPermDeviceInformation size={25} className="mr-2" />
              About Us
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <FaDoorOpen size={25} className="mr-2" />
              Rooms
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <BsFillCalendarFill size={25} className="mr-2" />
              Book Now
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <AiFillQuestionCircle size={25} className="mr-2" />
              FAQ{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
