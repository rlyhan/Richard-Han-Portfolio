import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { forwardRef, useState, useEffect, useRef } from "react";
import { PAGE_IDS } from "../constants";
const projects = require("../content/projects.json");

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);

    gsap.to(".about .right-column .image-wrap img", {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="about site-page black-scheme" ref={ref} id={PAGE_IDS.ABOUT}>
      <div className="page-content column-layout">
        <div className="left-column">
          <div className="paragraph-wrapper">
            <p>
              Richard is a natural creative who loves to see ambitious ideas
              brought to life digitally, with visually sleek interfaces and an
              exceptional user experience.
              <br />
              <br />
              He has collaborated with interesting and like-minded people to
              produce high end web experiences across a diverse range of
              industries, from fashion brands and architecture studios to art
              galleries and tourism.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrap">
            <img
              src="/images/about/portrait.png"
              alt="Richard Han Software Developer profile image"
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
              visual aesthetic and customised interfaces, for clients such as{" "}
              <a href={projects[3].url} target="_blank">
                Deadly Ponies
              </a>
              ,{" "}
              <a href={projects[1].url} target="_blank">
                Coloursmith
              </a>
              , and{" "}
              <a
                href="https://bestawards.co.nz/digital/large-scale-websites/sons-co/neat-places-1/"
                target="_blank"
              >
                Neat Places (see on Best Awards)
              </a>{" "}
              <br />
              <br />
              He is currently working with{" "}
              <a href="https://makeagency.co.uk/" target="_blank">
                Make Agency.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
