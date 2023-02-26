import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { forwardRef, useEffect } from "react";
import { PAGE_IDS } from "../constants";
import { useOutletContext } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useOutletContext();

  const handleSetPage = (page) => {
    setCurrentPage(page);
    const newPage = document.getElementById(page);
    gsap.set(window, {
      scrollTo: newPage,
    });
  };

  useEffect(() => {
    const timeline = gsap.timeline({}).to(".home", {
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="home site-page" id={PAGE_IDS.HOME} ref={ref}>
      <div className="page-content">
        <div className="title-wrap">
          <h1 className="title">
            <span class="serif left">Creative</span>
            <span class="serif right">Developer</span>
            <span class="sans-serif right">Currently</span>
            <span class="sans-serif right">Based in</span>
            <span class="serif left indent">Wellington,</span>
            <span class="sans-serif left">New Zealand</span>
          </h1>
        </div>
      </div>
      <div className="home-nav-links">
        <a
          href={`#${PAGE_IDS.ABOUT}`}
          onClick={() => {
            handleSetPage(PAGE_IDS.ABOUT);
          }}
        >
          About
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a
          href={`#${PAGE_IDS.PROJECTS}`}
          onClick={() => {
            handleSetPage(PAGE_IDS.PROJECTS);
          }}
        >
          Projects
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a
          href={`#${PAGE_IDS.CONTACT}`}
          onClick={() => {
            handleSetPage(PAGE_IDS.CONTACT);
          }}
        >
          Contact
        </a>
      </div>
      <div className="name">Richard Han</div>
    </div>
  );
});

export default Home;
