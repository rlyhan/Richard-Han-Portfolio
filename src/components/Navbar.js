import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { PAGE_IDS } from "../constants";
import logo from "../images/logo.png";

const Navbar = ({
  handleSetPage,
  currentPage,
  navMenuOpen,
  setNavMenuOpen,
}) => {
  const [navMenuClass, setNavMenuClass] = useState("");

  const handleBurgerClick = () => {
    setNavMenuClass(navMenuClass === "" ? "active" : "");
    setNavMenuOpen(!navMenuOpen);
  };

  useEffect(() => {
    gsap.to(".nav-menu", {
      opacity: 1,
      duration: 0.5,
      visibility: "visible",
      scrub: true,
      scrollTrigger: {
        fastScrollEnd: true,
        trigger: document.querySelector(".project-detail")
          ? ".project-detail"
          : ".about",
        start: "top 20%",
        toggleActions: "play pause resume reverse",
      },
    });
    gsap.timeline({}).to(".logo", {
      opacity: 1,
      duration: document.querySelector(".home") ? 1.5 : 0,
      delay: document.querySelector(".home") ? 0.5 : 0,
    });
  }, []);

  return (
    <div className="nav-bar">
      <div
        className="logo"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            handleSetPage(PAGE_IDS.HOME);
          }
        }}
      >
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`nav-menu ${navMenuClass}`}>
        <div className="nav-links">
          <a
            href={`/#${PAGE_IDS.ABOUT}`}
            className={`about ${
              currentPage === PAGE_IDS.ABOUT ? "active" : ""
            }`}
            onClick={() => {
              handleSetPage(PAGE_IDS.ABOUT);
              handleBurgerClick();
            }}
          >
            About
          </a>
          <a
            href={`/#${PAGE_IDS.PROJECTS}`}
            className={`projects ${
              currentPage === PAGE_IDS.PROJECTS ? "active" : ""
            }`}
            onClick={() => {
              handleSetPage(PAGE_IDS.PROJECTS);
              handleBurgerClick();
            }}
          >
            Projects
          </a>
          <a
            href={`/#${PAGE_IDS.CONTACT}`}
            className={`contact ${
              currentPage === PAGE_IDS.CONTACT ? "active" : ""
            }`}
            onClick={() => {
              handleSetPage(PAGE_IDS.CONTACT);
              handleBurgerClick();
            }}
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
