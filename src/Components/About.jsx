import React from "react";

const About = () => {
  return (
    <div className="max-w-[1640px] px-auto puy-12 flex justify-center text-center p-4 text-2xl">
      {/* who we are */}
      <div>
        <h2 className=" font-bold p-2">
          <span className="text-red-600">Adventure</span> Awaits
        </h2>
        <p className="font-medium p-2">
          Elkhart County's premier escape room adventure! Work with up to eight
          people, solve puzzles, decypher clues and escape! Bring your party or
          corporate event here and experience true adventure!
        </p>
        <div className="flex justify-center md:p-6">
          <button className="flex bg-red-600 rounded-full p-2 text-black cursor-pointer hover:bg-black hover:text-white">
            Explore Our Rooms!
          </button>
        </div>
      </div>

      {/* Team building,Bachelor/Bachelorette parties and more */}
      {/* <div>
        <h2>Your next Adventure filled party here!</h2>
        <p>We can accomodate any call for adventure!</p>
        <ul>
          <li>Birthdays</li>
          <li>Corporate Team Building</li>
          <li>Bachelore and Bachlorette parties</li>
          <li>First Dates</li>
        </ul>
        <button>Book Now</button>
      </div> */}
    </div>
  );
};

export default About;
