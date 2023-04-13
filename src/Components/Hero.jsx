import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import BGvid from "../Assets/BGvid.mp4";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      {/* Over lay  */}
      <div className="max-h-[500px] relative">
        <div
          className="absolute w-full h-full text-gray-200 max-h-[500px] bg-gray-200/40
        flex flex-col justify-center"
        >
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to
          </h1>
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Elkhart County's
          </h1>
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            First <span className="text-black font-bold">Escape</span>{" "}
            <span className="text-red-600 font-bold">Adventure</span>!
          </h1>
          {/* Book now button hidden on larger screen */}
          <div className="px-4 py-2">
            <button className="sm:hidden flex items-center bg-red-600 rounded-full p-2 text-black cursor-pointer hover:bg-black hover:text-white">
              <BsFillCalendarFill className="mr-2" />
              Book Now
            </button>
          </div>
        </div>

        {/* Landing Page Video */}
        <video
          src={BGvid}
          autoPlay
          loop
          muted
          className="w-screen max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
