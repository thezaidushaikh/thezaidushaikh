import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import LocomotiveScroll from "locomotive-scroll";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen bg-zinc-800 select-none">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
