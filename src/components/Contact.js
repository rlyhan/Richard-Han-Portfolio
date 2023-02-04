import { gsap } from "gsap";
import React, { useState, useRef, useEffect } from "react";
import { PAGE_IDS } from "../constants";
import { DESKTOP_WIDTH } from "../content/widths.js";

const Contact = () => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);
    if (window.innerWidth >= DESKTOP_WIDTH) {
      gsap.utils
        .toArray(".contact .heading, .contact .email")
        .forEach(function (elem) {
          gsap.to(elem, {
            yPercent: -30,
            duration: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              scrub: 1,
              start: "top 90%",
              end: "bottom 90%",
            },
          });
        });
    }
  }, []);

  return (
    <div className="contact site-page" id={PAGE_IDS.CONTACT} ref={containerRef}>
      <div className="page-content">
        <div className="content-wrap">
          <p className="heading">
            Keen to work
            <br />
            together?
            <br />
            Send me a message
          </p>
          <a href="mailto:richard.ly.han@gmail.com" className="email">
            <span>richard.ly.han@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
