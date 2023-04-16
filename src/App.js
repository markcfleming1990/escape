import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import RoomCard from "./Components/RoomCard";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <RoomCard />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
