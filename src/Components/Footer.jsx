import React from "react";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="max-w-[1640px] h-auto px-auto py-12 flex justify-between text-center p-4 text-2xl border-t-4 border-red-600">
      <div className="mt-2">
        <h1 className="text-xl mt-6 sm:text-2xl md:text-3xl md:mt-6 px-2 font-bold cursor-pointer">
          Escape
          <span className="text-red-600">Adventures</span>
        </h1>
        <div className="flex px-4 text-red-600 justify-center md:justify-start">
          <IoLogoFacebook className="cursor-pointer" />
          <IoLogoTwitter className="cursor-pointer" />
        </div>
        <div className="flex flex-col p-4 mx-auto text-left">
          <p>1234 1st St.</p>
          <p>Goshen, IN</p>
          <p>56526</p>
          <p>574-555-2222</p>
        </div>
      </div>
      <div className="flex justify-between mr-6">
        <ul className="flex flex-col p-4 text-left">
          <li className="text-xl py-4 flex cursor-pointer">Corporate</li>
          <li className="text-xl py-4 flex cursor-pointer">Parties</li>
          <li className="text-xl py-4 flex cursor-pointer">Hall of Fame</li>
        </ul>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col p-4 text-left">
            <li className="text-xl py-4 flex cursor-pointer">Rooms</li>
            <li className="text-xl py-4 flex cursor-pointer">Book Now</li>
            <li className="text-xl py-4 flex cursor-pointer">FAQ</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
