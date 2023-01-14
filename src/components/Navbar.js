import React, { useState } from "react";
import { gsap } from "gsap";
import { PAGE_IDS } from "../constants";

const Navbar = ({ navMenuOpen, setNavMenuOpen }) => {
  const [navMenuClass, setNavMenuClass] = useState("");
  const [currentPage, setCurrentPage] = useState(null);

  const handleSetPage = (page) => {
    setCurrentPage(page);
    const newPage = document.getElementById(page);
    gsap.set(window, {
      scrollTo: newPage,
    });
    handleBurgerClick();
  };

  const handleBurgerClick = () => {
    setNavMenuClass(navMenuClass === "" ? "active" : "");
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <div className="nav-bar">
      <div className="logo" onClick={() => handleSetPage(PAGE_IDS.HOME)}>
        <a href="/">Richard Han</a>
      </div>
      <div className={`nav-menu ${navMenuClass}`}>
        <div className="nav-links">
          <a
            href={`#${PAGE_IDS.ABOUT}`}
            id={`about ${currentPage === PAGE_IDS.ABOUT ? "active" : ""}`}
            onClick={() => handleSetPage(PAGE_IDS.ABOUT)}
          >
            About
          </a>
          <a
            href={`#${PAGE_IDS.PROJECTS}`}
            id={`projects ${currentPage === PAGE_IDS.PROJECTS ? "active" : ""}`}
            onClick={() => handleSetPage(PAGE_IDS.PROJECTS)}
          >
            Projects
          </a>
          <a
            href={`#${PAGE_IDS.CONTACT}`}
            id={`contact ${currentPage === PAGE_IDS.CONTACT ? "active" : ""}`}
            onClick={() => handleSetPage(PAGE_IDS.CONTACT)}
          >
            Contact
          </a>
        </div>
        <div
          className="burger"
          onClick={() => {
            handleBurgerClick();
          }}
        >
          <div className="burger-inner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
