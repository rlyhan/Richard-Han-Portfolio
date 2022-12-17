import React, { forwardRef } from "react";

const technologies = require("../content/technologies.json");
const albums = require("../content/about_albums.json");

const Contact = forwardRef((props, ref) => {
  // parallax scroll giant text on bottom left eg. "Let's Talk"
  // ie. scrolls out from under page on left slower than scroll speed
  return (
    <div className="contact" ref={ref}>
      <div className="page-content">
        <div className="page-content-flex-wrap">
          <div className="left-content">
            <p className="contact-heading">Let's talk.</p>
            <div className="contact-links">
              <p className="contact-detail">
                Email me:{" "}
                <a href="mailto:richard.ly.han@gmail.com">
                  richard.ly.han@gmail.com.
                </a>
                &nbsp;&nbsp;
              </p>
              <p className="contact-detail">
                Visit my{" "}
                <a
                  href="https://www.linkedin.com/in/richard-ly-han/"
                  target="_blank"
                >
                  LinkedIn.
                </a>
                &nbsp;&nbsp;
              </p>
              <p className="contact-detail">
                Visit my{" "}
                <a href="https://github.com/rlyhan" target="_blank">
                  GitHub.
                </a>
              </p>
            </div>
            <div className="technologies">
              {technologies.map((tech, index) => {
                return (
                  <span
                    className="tech"
                    key={index}
                    style={{ background: tech["colour"] }}
                  >
                    {tech["name"]}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="right-content">
            <div className="more-about">
              <p className="heading">A little more about me...</p>
              <div className="collapse-menu">
                <p className="collapse-menu-title">MUSIC</p>
                <div className="collapse-menu-content">
                  <p>
                    Music is the hobby I dedicate the most passion to outside
                    software development. I write and record music in my own
                    time, perform at open mics, and jam with friends.
                  </p>
                  <p>
                    I love deep listens to albums and attending live gigs, and
                    appreciate a range of genres from post-punk to psych rock to
                    indie folk. Here are some albums I'm listening to...
                  </p>
                  <div className="gallery-scroller">
                    <div className="gallery-scroller-wrap">
                      {albums.map((album) => {
                        return (
                          <GalleryItem
                            item={album}
                            itemImageDirectory="albums"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-menu">
                <p className="collapse-menu-title">OUTDOORS</p>
                <div className="collapse-menu-content">
                  <p>I go outside sometimes.</p>
                </div>
              </div>
              <div className="collapse-menu">
                <p className="collapse-menu-title">TRAVELS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const GalleryItem = ({ item, itemImageDirectory }) => {
  console.log(item);
  console.log(`../images/about/${itemImageDirectory}/${item["file_name"]}`);
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
