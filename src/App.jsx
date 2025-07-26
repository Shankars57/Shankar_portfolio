import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pointer from "./components/Pointer";

const App = () => {
  const [bit, setBit] = useState(true);
  const dots = [0, 1, 2, 3];

  useEffect(() => {
    const timer = setTimeout(() => {
      setBit(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {bit ? (
        <div>
          <Pointer />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      ) : (
        <div className="h-screen w-screen bg-gradient-to-br from-black to-zinc-900 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-52 h-20 rounded-full flex items-center justify-center bg-black border-[5px] border-white animate-bounce relative z-10">
              <p className="text-white text-center animate-pulse">
                Loading . . .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
