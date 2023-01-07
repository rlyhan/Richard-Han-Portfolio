import React, { Component, useState, useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import Contact from "./Contact";

function MainPages() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact />
    </>
  );
}

export default MainPages;
