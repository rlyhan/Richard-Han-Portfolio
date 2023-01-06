import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import bodymovin from "lottie-web";

import { DESKTOP_WIDTH } from "../content/widths.js";

import React, { Component, useState, useEffect, useRef } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { FeaturedProjects } from "./Projects";
import Contact from "./Contact";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const containerRef = useRef(null);
  const container = containerRef.current;
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  // constructor() {
  //   super();
  //   this.ref = [];
  //   this.currentPage = null;
  //   this.state = {
  //     currentProject: null,
  //     currentContactAboutSection: null,
  //   };
  // }

  // const navMenu = container.querySelector(".nav-menu");

  // const projectListFull = container.querySelector(".project-list-full");
  // gsap.set(projectListFull, { yPercent: -100 });

  // const homePage = container.querySelector(".home");
  // const aboutPage = container.querySelector(".about");
  // const projectsPage = container.querySelector(".projects");
  // const contactPage = container.querySelector(".contact");
  // const pages = [homePage, aboutPage, projectsPage, contactPage];

  // let currentPageIdx = 0;
  // let currentPage = pages[currentPageIdx];

  // const containerPosition = container.getBoundingClientRect().left;
  // const containerTranslateAmount = 0;

  // let scrollEndBreakpoint =
  //   pages[pages.length - 1].getBoundingClientRect().left * -1;

  // const pinpointAnimation = bodymovin.loadAnimation({
  //   container: container.getElementById("pinpoint-animation"),
  //   path: "animations/45564-pin-point.json",
  //   renderer: "svg",
  //   loop: true, // optional
  //   autoplay: true, // optional
  //   name: "Pinpoint", // optional
  // });

  // const setPage = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       this.setPage(entry.target);
  //     }
  //   });
  // };
  // const currentPageObserver = new IntersectionObserver(setPage, {
  //   root: container.clientWidth >= DESKTOP_WIDTH ? document.body : null,
  //   threshold: container.clientWidth >= DESKTOP_WIDTH ? 0.2 : 0.1,
  // });
  // this.pages.forEach((page) => {
  //   currentPageObserver.observe(page);
  // });

  // window.addEventListener("resize", (e) => {
  //   if (container.clientWidth >= DESKTOP_WIDTH) {
  //     window.location.reload();
  //   }
  // });

  // container.addEventListener("wheel", (e) => {
  //   if (container.clientWidth >= DESKTOP_WIDTH) {
  //     e.preventDefault();

  //     let scrollAmount = e.deltaY;
  //     this.setContainerPosition(scrollAmount);
  //   }
  // });

  // setContainerPosition = (scrollAmount) => {
  //   if (containerPosition <= 0 && containerTranslateAmount <= 0) {
  //     containerTranslateAmount -= scrollAmount;
  //     if (containerTranslateAmount > 0) containerTranslateAmount = 0;
  //     if (containerTranslateAmount < this.scrollEndBreakpoint) {
  //       containerTranslateAmount = this.scrollEndBreakpoint;
  //     }

  //     gsap.to(container, {
  //       x: containerTranslateAmount,
  //     });
  //   }
  // };

  // setPage = (newPage) => {
  //   this.currentPage = newPage;
  //   const pageIdx = this.pages.indexOf(this.currentPage);
  //   this.setNavLink(pageIdx);
  // };

  // setPageByIndex = (pageIdx) => {
  //   this.setPage(this.pages[pageIdx]);
  //   if (container.clientWidth < DESKTOP_WIDTH) {
  //     gsap.set(window, {
  //       scrollTo: this.currentPage,
  //     });
  //   } else {
  //     this.setContainerPosition(this.currentPage.getBoundingClientRect().left);
  //   }
  // };

  // const setNavLink = (pageIdx) => {
  //   const navLinks = Array.from(navMenu.querySelectorAll(".page-titles > li"));
  //   const oldCurrent = navLinks.find((navLink) =>
  //     navLink.classList.contains("current")
  //   );
  //   if (oldCurrent) oldCurrent.classList.remove("current");
  //   navLinks[pageIdx].classList.add("current");
  // };

  return (
    <div className="App" ref={containerRef}>
      <Navbar />
      <div className="pages-wrap">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <FeaturedProjects ref={projectsRef} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
