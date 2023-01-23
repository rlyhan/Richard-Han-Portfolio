import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { forwardRef, useEffect } from "react";
import { PAGE_IDS } from "../constants";
import { DESKTOP_WIDTH } from "../content/widths.js";

gsap.registerPlugin(ScrollTrigger);

const Home = forwardRef((props, ref) => {
  useEffect(() => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      gsap.to(".home .left-column", {
        yPercent: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".home.site-page",
          scrub: 1,
          start: "top center",
          end: "+=5000",
        },
      });
      gsap.to(".home .right-column", {
        yPercent: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".home.site-page",
          scrub: 1,
          start: "top center",
          end: "+=5000",
        },
      });
    }
  }, []);

  return (
    <div className="home site-page" id={PAGE_IDS.HOME} ref={ref}>
      <div className="page-content column-layout">
        <div className="left-column">
          <div className="paragraph-wrapper">
            <h2 className="subtitle">
              Creative developer currently based in Wellington, New Zealand
            </h2>
          </div>
        </div>
        <div className="right-column">
          <div className="paragraph-wrapper">
            <h1 className="title">
              Bringing
              <br />
              modern
              <br />
              visions to life
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
