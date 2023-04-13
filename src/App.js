import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import RoomCard from "./Components/RoomCard";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <RoomCard />
    </div>
  );
}

export default App;
