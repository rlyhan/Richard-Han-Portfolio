import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  return (
    <div className="contact site-page" ref={containerRef}>
      <div className="page-content upper">
        <div className="contact-details">
          <p className="heading">Send me a message</p>
          <div className="contact-links">
            <a href="mailto:richard.ly.han@gmail.com" className="email">
              richard.ly.han@
              <br />
              gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/richard-ly-han/"
              target="_blank"
              className="linkedin"
            >
              <span>LinkedIn</span>
              <img
                src={require("../images/linkedin.svg").default}
                alt="linkedin-logo"
              />
            </a>
            <a
              href="https://github.com/rlyhan"
              target="_blank"
              className="github"
            >
              <span>GitHub</span>
              <img
                src={require("../images/github.png").default}
                alt="github-logo"
              />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
