import { gsap } from "gsap";
import React, { useState, useRef, useEffect } from "react";
import { PAGE_IDS } from "../constants";

const Contact = () => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);
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
  }, []);

  return (
    <div
      className="contact black-scheme site-page"
      id={PAGE_IDS.CONTACT}
      ref={containerRef}
    >
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
            <span>richard.ly.han</span>
            <span>@gmail.com</span>
          </a>
        </div>
        <div className="footer">
          <p className="copyright">All Rights Reserved</p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/richard-ly-han/"
              target="_blank"
              className="linkedin"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/rlyhan"
              target="_blank"
              className="github"
            >
              <span>GitHub</span>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
