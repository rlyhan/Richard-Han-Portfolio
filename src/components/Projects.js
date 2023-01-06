import { gsap } from "gsap";
import ReactHtmlParser from "react-html-parser";
import { TABLET_WIDTH } from "../content/widths.js";

import React, { forwardRef, useState, useRef, useEffect } from "react";

const projects = require("../content/projects.json");
const more_about = require("../content/more_about.json");

const FeaturedProjects = () => {
  const ref = useRef(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [allProjectsHidden, setAllProjectsHidden] = useState(true);

  const [prevClickedListItem, setPrevClickedListItem] = useState(null);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const [galleryAnimations, setGalleryAnimations] = useState([]);

  // const toggleProject = (newProjectId) => {
  //   let prevProject = currentProject;
  //   let newProject = this.projectListFull.querySelector(
  //     `.project[data-id="${newProjectId}"]`
  //   );
  //   if (!newProject) return;
  //   if (prevProject) {
  //     gsap.timeline().to(prevProject.querySelector(".project-wrap"), {
  //       duration: 0.5,
  //       height: 0,
  //     });
  //     if (!(newProject === prevProject)) {
  //       gsap.timeline().to(newProject.querySelector(".project-wrap"), {
  //         duration: 0.5,
  //         height: "auto",
  //       });
  //     }
  //   } else {
  //     gsap
  //       .timeline()
  //       .to(newProject.querySelector(".project-wrap"), {
  //         duration: 0.5,
  //         height: "auto",
  //       })
  //       .to(this.projectListFull, {
  //         duration: 0.5,
  //         scrollTo: newProject,
  //       });
  //   }
  //   setCurrentProject(newProject === prevProject ? null : newProject);
  // };

  // const toggleAllProjects = () => {
  //   if (allProjectsHidden) {
  //     gsap.to(this.projectListFull, {
  //       yPercent: 0,
  //       duration: 0.5,
  //       ease: "expo",
  //     });
  //     setAllProjectsHidden(false);
  //   } else {
  //     gsap.to(this.projectListFull, {
  //       yPercent: -100,
  //       duration: 0.5,
  //       ease: "expo",
  //     });
  //     setAllProjectsHidden(true);
  //   }
  // };

  // useState to get current project
  // set state by passing project id from links on right column
  // display project on left if state else if null display significant text

  // const viewMore = this.refs.viewMore;
  // viewMore.addEventListener("click", (e) => {
  //   toggleAllProjects();
  // });
  // const projects = container.querySelectorAll(".project");
  // projects.forEach((project) => {
  //   project.querySelector(".project-wrap").addEventListener("click", (e) => {
  //     toggleAllProjects();
  //     toggleProject(project.dataset.id);
  //   });
  //   project
  //     .querySelector(".project-wrap")
  //     .addEventListener("mouseenter", (e) => {
  //       if (window.innerWidth >= TABLET_WIDTH) {
  //         gsap.to(project, {
  //           duration: 0.5,
  //           scale: 1.25,
  //         });
  //         gsap.to(project.querySelector(".image"), {
  //           duration: 0.5,
  //           opacity: 1,
  //         });
  //       }
  //     });
  //   project
  //     .querySelector(".project-wrap")
  //     .addEventListener("mouseleave", (e) => {
  //       if (window.innerWidth >= TABLET_WIDTH) {
  //         gsap.to(project, {
  //           duration: 0.5,
  //           scale: 1,
  //         });
  //         gsap.to(project.querySelector(".image"), {
  //           duration: 0.5,
  //           opacity: 0.7,
  //         });
  //       }
  //     });
  // });

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
        const speed = 85;
        let tickerWidth = galleryScroller.offsetWidth;
        let initDuration = tickerWidth / speed;
        const galleryAnimation = gsap.fromTo(
          galleryScroller,
          {
            xPercent: 25,
          },
          {
            duration: initDuration,
            xPercent: -100,
            ease: "none",
            repeat: -1,
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
    <div className="projects site-page" ref={ref}>
      <div className="page-content">
        <h3>Selected Works</h3>
        <hr></hr>
        <div className="content-list project-list">
          <ul>
            {projects
              .filter((project) => project["featured"] === true)
              .sort((a, b) => a["id"] - b["id"])
              .map((project, index) => {
                return (
                  <li key={index} className="list-item">
                    <a>
                      <div className="list-item-heading">
                        <span class="list-item-number">0{index + 1} /</span>
                        <span class="list-item-title">{project["name"]}</span>
                      </div>
                      <p className="list-item-attributes">
                        {project["association"]}&nbsp;/&nbsp;
                        {project["category"]}&nbsp;/
                      </p>
                    </a>
                  </li>
                  // <div
                  //   className="list-item"
                  //   key={index}
                  //   data-id={project["id"]}
                  // >
                  //   <div className="project-wrap">
                  //     <div className="image">
                  //       <img
                  //         src={
                  //           require(`../images/projects/${project["file_name"]}`)
                  //             .default
                  //         }
                  //         alt="project-thumb"
                  //       />
                  //     </div>
                  //     <div className="list-item-title">
                  //       <p>{project["name"]}</p>
                  //     </div>
                  //   </div>
                  // </div>
                );
              })}
          </ul>
        </div>
        <div className="content-list additional-project-list">
          <p class="heading">Additional Works</p>
          <ul>
            {projects
              .filter((project) => project["featured"] === false)
              .sort((a, b) => a["id"] - b["id"])
              .map((project, index) => {
                return (
                  <li key={index} className="list-item">
                    <a>
                      <div className="list-item-heading">
                        <span class="list-item-number">0{index + 1} /</span>
                        <span class="list-item-title">{project["name"]}</span>
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
        <div className="content-list more-about-list">
          <p className="heading">A little more about me...</p>
          <ul>
            {more_about.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-item"
                  onClick={(e) => {
                    collapseListItem(e.currentTarget);
                    toggleGallery(e.currentTarget);
                  }}
                >
                  <a>
                    <div className="list-item-heading">
                      <span class="list-item-number">0{index + 1} /</span>
                      <span class="list-item-title">{item["category"]}</span>
                    </div>
                  </a>
                  <div className="list-item-collapsible">
                    <div className="description">
                      {ReactHtmlParser(item["text"])}
                    </div>
                    <div className="gallery-scroller">
                      <div className="gallery-scroller-wrap">
                        {item.gallery.map((album) => {
                          return (
                            <GalleryItem
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

export { FeaturedProjects };
