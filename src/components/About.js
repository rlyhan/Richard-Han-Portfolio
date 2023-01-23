import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { forwardRef, useState, useEffect, useRef } from "react";
import { PAGE_IDS } from "../constants";
import { DESKTOP_WIDTH } from "../content/widths.js";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);

    if (window.innerWidth >= DESKTOP_WIDTH) {
      gsap.to(".about .right-column .image-wrap img", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <div className="about site-page" ref={ref} id={PAGE_IDS.ABOUT}>
      <div className="page-content column-layout">
        <div className="left-column">
          <div className="paragraph-wrapper">
            <p>
              Richard is a naturally creative and visual person which drives his
              passion for bringing ideas to life digitally. He loves to
              collaborate with like-minded people and industries to produce
              ambitious and beautiful applications.
              <br />
              <br />
              From online stores and architectural portfolios to art galleries
              and tourism, Richard has produced work for a diverse range of
              clients.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrap">
            <img
              src={require("../images/about/portrait.png").default}
              alt="profile-image"
            />
          </div>
          <div className="paragraph-wrapper">
            <p>
              In collaboration with{" "}
              <a
                href="https://bestawards.co.nz/studios/sons-co/"
                target="_blank"
              >
                Sons & Co,
              </a>{" "}
              he has worked on a variety of projects with a strong focus on
              visual aesthetic and customised interfaces, for clients such as
              Deadly Ponies, Coloursmith, and{" "}
              <a
                href="https://bestawards.co.nz/digital/large-scale-websites/sons-co/neat-places-1/"
                target="_blank"
              >
                Neat Places (see on Best Awards)
              </a>{" "}
              <br />
              <br />
              He is currently contracting for{" "}
              <a href="https://voyage.studio/" target="_blank">
                Voyage.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
