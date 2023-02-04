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
      <div className="footer">
        <p className="copyright">All Rights Reserved</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/richard-ly-han/"
            target="_blank"
            className="linkedin"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/rlyhan"
            target="_blank"
            className="github"
          >
            <span>GitHub</span>
          </a>{" "}
        </div>
      </div>
    </>
  );
}

export default MainPages;
