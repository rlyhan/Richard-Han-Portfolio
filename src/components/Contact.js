import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  return (
    <div className="contact site-page" ref={containerRef}>
      <div className="page-content">
        <p className="heading">
          Keen to work
          <br />
          together?
          <br />
          Send me a message
        </p>
        <a href="mailto:richard.ly.han@gmail.com" className="email">
          richard.ly.han@gmail.com
        </a>
        <div className="footer">
          <p class="copyright">All Rights Reserved</p>
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
