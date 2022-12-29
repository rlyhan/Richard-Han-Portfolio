import React, { forwardRef, useState, useRef, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { gsap } from "gsap";

const more_about = require("../content/more_about.json");

const Contact = () => {
  const MUSIC = "music";
  const OUTDOORS = "outdoors";
  const TRAVELS = "travels";
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  const openSection = (sectionName) => {
    console.log("container:", container);
    const section = container?.querySelector(
      `.page-content.lower.${sectionName}`
    );
    console.log("section:", section);

    if (currentSection) {
      if (section === currentSection) {
        closeAllSections();
        setCurrentSection(null);
      } else {
        currentSection.classList.remove("active");
        section.classList.add("active");
        gsap
          .timeline()
          .to(section, {
            yPercent: -100,
          })
          .set(currentSection, {
            yPercent: 0,
          });
        setCurrentSection(section);
      }
    } else {
      section.classList.add("active");
      gsap.to(section, {
        yPercent: -100,
      });
      setCurrentSection(section);
    }
  };

  const closeAllSections = () => {
    const sections = container?.querySelectorAll(".page-content.lower");
    sections.forEach((section) => {
      gsap.to(section, { yPercent: 0 });
    });

    setCurrentSection(null);
  };

  return (
    <div className="contact site-page" ref={containerRef}>
      <div className="more-about-links">
        <span
          className="pre-link-text"
          style={{ display: currentSection ? "none" : "inline" }}
        >
          A little more about me...&nbsp;
        </span>
        <a
          onClick={closeAllSections}
          className="back-to-contact"
          style={{ display: currentSection ? "inline" : "none" }}
        >
          Back to Contact...
        </a>
        <a
          className={`section-link ${currentSection === MUSIC && "active"}`}
          onClick={() => openSection(MUSIC)}
        >
          Music&nbsp;
        </a>
        <a
          className={`section-link ${currentSection === OUTDOORS && "active"}`}
          onClick={() => openSection(OUTDOORS)}
        >
          Outdoors&nbsp;
        </a>
        <a
          className={`section-link ${currentSection === TRAVELS && "active"}`}
          onClick={() => openSection(TRAVELS)}
        >
          Travels
        </a>
      </div>
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
      {more_about.map((section) => {
        return (
          <div
            className={`page-content lower ${section[
              "category"
            ].toLowerCase()}`}
          >
            <div className="description">
              {ReactHtmlParser(section["text"])}
            </div>
            <div className="gallery-scroller">
              <div className="gallery-scroller-wrap">
                {section.gallery.map((album) => {
                  return (
                    <GalleryItem item={album} itemImageDirectory="albums" />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const GalleryItem = ({ item, itemImageDirectory }) => {
  return (
    <div className="gallery-item">
      <img
        className="gallery-item-image"
        src={
          require(`../images/about/${itemImageDirectory}/${item["file_name"]}`)
            .default
        }
        alt="gallery-item-thumb"
      />
      <div className="gallery-item-desc">
        <p className="title">{item.title}</p>
        <p className="subtitle">{item.subtitle}</p>
      </div>
    </div>
  );
};

export default Contact;
