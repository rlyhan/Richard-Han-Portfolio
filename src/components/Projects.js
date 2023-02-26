import { gsap } from "gsap";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { getListNumbering } from "../helpers";
import { PAGE_IDS } from "../constants";
import { TABLET_WIDTH } from "../content/widths.js";

import React, { useState, useRef, useEffect } from "react";

const projects = require("../content/projects.json");
const more_about = require("../content/more_about.json");

const Projects = () => {
  const ref = useRef(null);

  const [prevClickedListItem, setPrevClickedListItem] = useState(null);
  const [galleryAnimations, setGalleryAnimations] = useState([]);

  useEffect(() => {
    gsap.utils
      .toArray(".projects-title, .projects .content-list .heading")
      .forEach(function (elem) {
        gsap.to(elem, {
          yPercent: -30,
          duration: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            scrub: 1,
            start: "bottom 98%",
            end: "bottom 95%",
          },
        });
      });

    gsap.utils
      .toArray(".projects .project-list ul li")
      .forEach(function (elem) {
        gsap.to(elem, {
          yPercent: -15,
          duration: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            scrub: 1,
            start: "bottom 90%",
            end: "bottom 80%",
          },
        });
      });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      const moreAboutList = container.querySelector(".more-about-list");
      const animationsArray = [];

      const moreAboutListItems = moreAboutList.querySelectorAll(".list-item");
      moreAboutListItems.forEach((listItem) => {
        // initially hide all collapsibles
        const collapsible = listItem.querySelector(".list-item-collapsible");
        gsap.set(collapsible, { height: 0 });
        // initialise animation then pause
        const galleryScroller = listItem.querySelector(
          ".gallery-scroller-wrap"
        );
        const speed = listItem.dataset.speed;
        let tickerWidth = galleryScroller.offsetWidth;
        let firstItem = galleryScroller.querySelector(".gallery-item");
        let initDuration = firstItem.offsetWidth / speed;
        const galleryAnimation = gsap
          .timeline({
            repeat: -1,
          })
          .fromTo(
            galleryScroller,
            {
              xPercent: 0,
            },
            {
              duration: initDuration,
              xPercent: `-${((firstItem.offsetWidth + 1) / tickerWidth) * 100}`,
              ease: "none",
              onComplete: () => {
                firstItem.parentNode.appendChild(firstItem);
                firstItem = galleryScroller.querySelector(".gallery-item");
                initDuration = firstItem.offsetWidth / speed;
              },
            }
          );
        galleryAnimation.pause();
        animationsArray.push({
          el: listItem,
          animation: galleryAnimation,
        });
      });

      setGalleryAnimations(animationsArray);
    }
  }, []);

  const toggleGallery = (listItem) => {
    const existingAnimation = galleryAnimations.find(
      (gallAnim) => gallAnim.el === listItem
    );
    existingAnimation.animation.paused(!existingAnimation.animation.paused());
  };

  const collapseListItem = (clickedLink) => {
    const clickedListItem = clickedLink.closest(".list-item");
    const clickedListItemCollapsible = clickedListItem.querySelector(
      ".list-item-collapsible"
    );

    if (clickedListItem === prevClickedListItem) {
      gsap.timeline().to(clickedListItemCollapsible, {
        height: 0,
        duration: 0.5,
      });
    } else {
      if (prevClickedListItem !== null) {
        const prevClickedListItemCollapsible =
          prevClickedListItem.querySelector(".list-item-collapsible");
        gsap.timeline().to(prevClickedListItemCollapsible, {
          height: 0,
          duration: 0.5,
        });
        toggleGallery(prevClickedListItem);
      }

      gsap.timeline().to(clickedListItemCollapsible, {
        height: "auto",
        duration: 0.5,
      });
    }

    clickedListItem === prevClickedListItem
      ? setPrevClickedListItem(null)
      : setPrevClickedListItem(clickedListItem);
  };

  return (
    <div className="projects site-page" id={PAGE_IDS.PROJECTS} ref={ref}>
      <div className="page-content">
        <div className="projects-title">
          <h3>Selected Works</h3>
        </div>
        <div className="content-list project-list">
          <ul>
            {projects
              .filter((project) => project["featured"] === true)
              .sort((a, b) => a["id"] - b["id"])
              .map((project, index) => {
                return (
                  <li key={index} className="list-item">
                    <Link to={`projects/${project["slug"]}`} reloadDocument>
                      <div className="list-item-heading">
                        <span className="list-item-number">
                          {getListNumbering(project["id"])} /
                        </span>
                        <span className="list-item-title">
                          {project["name"]}
                        </span>
                      </div>
                      <p className="list-item-attributes">
                        {project["association"]}&nbsp;/&nbsp;
                        {project["category"]}&nbsp;/
                      </p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="content-list additional-project-list">
          <p className="heading">Additional Works</p>
          <ul>
            {projects
              .filter((project) => project["featured"] === false)
              .sort((a, b) => a["id"] - b["id"])
              .map((project, index) => {
                return (
                  <li key={index} className="list-item">
                    <a href={project["url"]} target="_blank">
                      <div className="list-item-heading">
                        <span className="list-item-number">
                          {getListNumbering(project["id"])} /
                        </span>
                        <span className="list-item-title">
                          {project["name"]}
                        </span>
                      </div>
                      <p className="list-item-attributes">
                        {project["association"]}&nbsp;/&nbsp;
                        {project["category"]}&nbsp;/
                      </p>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="paragraph-wrap">
          <p>
            + Versatile across a range of frameworks and technologies
            <br />
            <br />+ Dedicated to the development process including designing and
            testing to create a highly optimised experience
            <br />
            <br />+ Experienced working in Agile teams
          </p>
        </div>
        <div className="content-list more-about-list">
          <p className="heading">A little more about me...</p>
          <ul>
            {more_about.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-item"
                  data-speed={
                    window.innerWidth >= TABLET_WIDTH ||
                    item.category === "Music"
                      ? item.scrolling_speed
                      : 40
                  }
                  onClick={(e) => {
                    collapseListItem(e.currentTarget);
                    toggleGallery(e.currentTarget);
                  }}
                >
                  <a>
                    <div className="list-item-heading">
                      <span className="list-item-number">0{index + 1} /</span>
                      <span className="list-item-title">
                        {item["category"]}
                      </span>
                    </div>
                  </a>
                  <div className="list-item-collapsible">
                    <div className="description">
                      {ReactHtmlParser(item["text"])}
                    </div>
                    <div className="gallery-scroller">
                      <div className="gallery-scroller-wrap">
                        {item.gallery.map((album, index) => {
                          return (
                            <GalleryItem
                              key={index}
                              item={album}
                              itemImageDirectory={item[
                                "category"
                              ].toLowerCase()}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
      <div className="gallery-item-desc">{item.caption}</div>
    </div>
  );
};

export { Projects };
