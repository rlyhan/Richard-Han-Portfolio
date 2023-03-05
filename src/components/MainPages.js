import React, { useRef } from "react";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import Contact from "./Contact";

function MainPages({ currentPage, setCurrentPage }) {
  return (
    <>
      <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default MainPages;
