import React from "react";
import StarVoyager from "../Assets/StarVoyage.jpg";
import LibraryEscape from "../Assets/LibraryEscape.jpg";
import DaVinci from "../Assets/DaVinci.jpg";

const RoomCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid gap-6 md:grid-cols-3">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Star Voyager</p>
          <p className="px-2">A Galaxy Adventure</p>
          <button className="border-red-600 bg-red-600 text-black mx-2 absolute bottom-4">
            More Info
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={StarVoyager}
          alt="/"
        />
      </div>

      <div className=" rounded-xl relative">
        {/* Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded xl text-red-600">
          <p className="font-bold text-2xl px-2 pt-4">Library Escape</p>
          <p className="px-2">Can you escape from the mad professor?</p>
          <button className="border-red-600 bg-red-600 text-black mx-2 absolute bottom-4">
            More Info
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={LibraryEscape}
          alt="/"
        />
      </div>
      <div className=" rounded-xl relative">
        {/* Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded xl text-red-600">
          <p className="font-bold text-2xl px-2 pt-4">Holy Artifacts</p>
          <p className="px-2">Holy Knights and Free Masons oh my!</p>
          <button className="border-red-600 bg-red-600 text-black mx-2 absolute bottom-4">
            More Info
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={DaVinci}
          alt="/"
        />
      </div>
    </div>
  );
};

export default RoomCard;
