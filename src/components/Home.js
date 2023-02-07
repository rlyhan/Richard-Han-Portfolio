import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { forwardRef, useEffect } from "react";
import { PAGE_IDS } from "../constants";
import { TABLET_WIDTH } from "../content/widths.js";
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

    // title
    gsap.fromTo(
      ".home .title.clone.grey-1",
      {
        y: 0,
      },
      {
        y: window.innerWidth >= TABLET_WIDTH ? "-45%" : "-25%",
        duration: 0.1,
        delay: 0.2,
        ease: true,
      }
    );
    gsap.fromTo(
      ".home .title.clone.grey-2",
      {
        y: 0,
      },
      {
        y: window.innerWidth >= TABLET_WIDTH ? "45%" : "25%",
        duration: 0.1,
        delay: 0.2,
        ease: true,
      }
    );
    gsap.fromTo(
      ".home .title.clone.white-1",
      {
        y: 0,
      },
      {
        y: window.innerWidth >= TABLET_WIDTH ? "-70%" : "-40%",
        duration: 0.2,
        delay: 0.3,
        ease: true,
      }
    );
    gsap.fromTo(
      ".home .title.clone.white-2",
      {
        y: 0,
      },
      {
        y: window.innerWidth >= TABLET_WIDTH ? "70%" : "40%",
        duration: 0.2,
        delay: 0.3,
        ease: true,
      }
    );

    // decorator
    gsap.fromTo(
      ".home .decorator .line .inner",
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1,
        delay: 1,
        ease: true,
      }
    );
  }, []);

  return (
    <div className="home site-page" id={PAGE_IDS.HOME} ref={ref}>
      <div className="page-content">
        <div className="title-wrap">
          <h1 className="title">Richard Han</h1>
          <h1 className="title clone grey grey-1">Richard Han</h1>
          <h1 className="title clone white white-1">Richard Han</h1>
          <h1 className="title clone grey grey-2">Richard Han</h1>
          <h1 className="title clone white white-2">Richard Han</h1>
        </div>
        <div className="subtitle-wrap">
          <h2 className="subtitle">
            <span>Creative</span>
            <span>developer</span>
          </h2>
          <h2 className="subtitle">
            <span>currently</span>
            <span>based</span>
            <span>in</span>
          </h2>
          <h2 className="subtitle">
            <span>Wellington,</span>
            <span>New</span>
            <span>Zealand</span>
          </h2>
        </div>
        <div className="decorator">
          <div className="line">
            <div className="inner"></div>
          </div>
          <div className="circle"></div>
          <div className="line">
            <div className="inner"></div>
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
          <span>~</span>
          <a
            href={`#${PAGE_IDS.PROJECTS}`}
            onClick={() => {
              handleSetPage(PAGE_IDS.PROJECTS);
            }}
          >
            Projects
          </a>
          <span>~</span>
          <a
            href={`#${PAGE_IDS.CONTACT}`}
            onClick={() => {
              handleSetPage(PAGE_IDS.CONTACT);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
});

export default Home;
