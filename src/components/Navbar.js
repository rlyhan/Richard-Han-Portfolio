import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { PAGE_IDS } from "../constants";

const Navbar = ({
  currentPage,
  setCurrentPage,
  navMenuOpen,
  setNavMenuOpen,
}) => {
  const [navMenuClass, setNavMenuClass] = useState("");

  const handleSetPage = (page) => {
    setCurrentPage(page);
    const newPage = document.getElementById(page);
    gsap.set(window, {
      scrollTo: newPage,
    });
  };

  const handleBurgerClick = () => {
    setNavMenuClass(navMenuClass === "" ? "active" : "");
    setNavMenuOpen(!navMenuOpen);
  };

  useEffect(() => {
    if (!document.querySelector(".project-detail")) {
      gsap.to(".nav-bar", {
        opacity: 1,
        duration: 0.5,
        visibility: "visible",
        scrub: true,
        scrollTrigger: {
          trigger: ".about",
          start: "top 20%",
          toggleActions: "play pause resume reverse",
        },
      });
    }
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
        <a href="/">Richard Han</a>
      </div>
      <div className={`nav-menu ${navMenuClass}`}>
        <div className="nav-links">
          <a
            href={`/#${PAGE_IDS.ABOUT}`}
            id={`about ${currentPage === PAGE_IDS.ABOUT ? "active" : ""}`}
            onClick={() => {
              handleSetPage(PAGE_IDS.ABOUT);
              handleBurgerClick();
            }}
          >
            About
          </a>
          <a
            href={`/#${PAGE_IDS.PROJECTS}`}
            id={`projects ${currentPage === PAGE_IDS.PROJECTS ? "active" : ""}`}
            onClick={() => {
              handleSetPage(PAGE_IDS.PROJECTS);
              handleBurgerClick();
            }}
          >
            Projects
          </a>
          <a
            href={`/#${PAGE_IDS.CONTACT}`}
            id={`contact ${currentPage === PAGE_IDS.CONTACT ? "active" : ""}`}
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
