import { gsap } from "gsap";

import { TABLET_WIDTH } from "../content/widths.js";

import React, { forwardRef, useState, useRef, useEffect } from "react";

const projects = require("../content/projects.json");

const FeaturedProjects = forwardRef((props, ref) => {
  const container = ref.current;
  const allProjectsRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [allProjectsHidden, setAllProjectsHidden] = useState(true);

  const toggleProject = (newProjectId) => {
    let prevProject = currentProject;
    let newProject = this.projectListFull.querySelector(
      `.project[data-id="${newProjectId}"]`
    );
    if (!newProject) return;
    if (prevProject) {
      gsap.timeline().to(prevProject.querySelector(".project-wrap"), {
        duration: 0.5,
        height: 0,
      });
      if (!(newProject === prevProject)) {
        gsap.timeline().to(newProject.querySelector(".project-wrap"), {
          duration: 0.5,
          height: "auto",
        });
      }
    } else {
      gsap
        .timeline()
        .to(newProject.querySelector(".project-wrap"), {
          duration: 0.5,
          height: "auto",
        })
        .to(this.projectListFull, {
          duration: 0.5,
          scrollTo: newProject,
        });
    }
    setCurrentProject(newProject === prevProject ? null : newProject);
  };

  const toggleAllProjects = () => {
    if (allProjectsHidden) {
      gsap.to(this.projectListFull, {
        yPercent: 0,
        duration: 0.5,
        ease: "expo",
      });
      setAllProjectsHidden(false);
    } else {
      gsap.to(this.projectListFull, {
        yPercent: -100,
        duration: 0.5,
        ease: "expo",
      });
      setAllProjectsHidden(true);
    }
  };

  // useState to get current project
  // set state by passing project id from links on right column
  // display project on left if state else if null display significant text

  // const viewMore = this.refs.viewMore;
  // viewMore.addEventListener("click", (e) => {
  //   toggleAllProjects();
  // });
  // console.log(container);
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

  return (
    <>
      <AllProjects toggleProject={toggleProject} ref={allProjectsRef} />
      <div className="projects site-page" ref={ref}>
        <div className="page-content column-layout">
          <div className="left-column">
            <p className="significant">
              Django Python React NextJS TypeScript Node.JS MongoDB SASS HTML
              JavaScript CSS
            </p>
          </div>
          <div className="right-column">
            <ul className="project-list">
              {projects
                .sort((a, b) => a["id"] - b["id"])
                .map((project, index) => {
                  if (project["featured"]) {
                    return (
                      <li key={index} className="project">
                        <a>{project["name"]}</a>
                      </li>
                      // <div
                      //   className="project"
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
                      //     <div className="project-title">
                      //       <p>{project["name"]}</p>
                      //     </div>
                      //   </div>
                      // </div>
                    );
                  }
                })}
              <li
                className="toggle-all-projects"
                onClick={() => toggleAllProjects}
              >
                <a>View all projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

const AllProjects = forwardRef(({ toggleProject }, ref) => {
  const container = ref.current;
  const [projects, setProjects] = useState([]);
  const [sortedClientProjects, setSortedClientProjects] = useState([]);
  const [sortedBeginnerProjects, setSortedBeginnerProjects] = useState([]);

  // const hide = this.refs.hideAll;
  // hide.addEventListener("click", (e) => {
  //   if (currentProject) {
  //     toggleProject(currentProject.dataset.id);
  //   }
  //   toggleAllProjects();
  // });

  useEffect(() => {
    gsap.set(container, {
      yPercent: -100,
    });
    setProjects(container?.querySelectorAll(".project"));
    projects?.forEach((project) => {
      project.querySelector(".project-title").addEventListener("click", (e) => {
        toggleProject(project.dataset.id);
      });
    });

    if (projects && projects.length)
      setSortedClientProjects(
        Array.prototype.slice
          .call(
            projects.sort((a, b) => {
              return a["name"].localeCompare(b["name"]);
            })
          )
          .filter((project) => project["client"])
      );

    if (projects && projects.length)
      setSortedBeginnerProjects(
        Array.prototype.slice
          .call(
            projects?.sort((a, b) => {
              return a["name"].localeCompare(b["name"]);
            })
          )
          .filter((project) => !project["client"])
      );
  }, [container]);

  return (
    <div className="project-list-full" ref={ref}>
      <div className="project-list-wrap">
        <h4 className="project-section">Client work</h4>
        {sortedClientProjects.map((project, index) => {
          return (
            <div className="project" key={index} data-id={project["id"]}>
              <div className="project-title">
                <p>{project["name"]}</p>
              </div>
              <div className="project-wrap">
                <div className="image">
                  <a href={project["url"]} target="_blank">
                    <img
                      src={
                        require(`../images/projects/${project["file_name"]}`)
                          .default
                      }
                      alt="project-thumb"
                    />
                  </a>
                </div>
                <div className="project-description">
                  <p>{project["description"]}</p>
                </div>
                <div className="links">
                  <a href={project["url"]} target="_blank">
                    <span>VIEW SITE</span>
                  </a>
                  {project["best_awards_url"] && (
                    <a href={project["best_awards_url"]} target="_blank">
                      <span>VIEW ON BEST AWARDS</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <h4 className="project-section">Personal work</h4>
        {sortedBeginnerProjects.map((project, index) => {
          return (
            <div className="project" key={index} data-id={project["id"]}>
              <div className="project-title">
                <p>{project["name"]}</p>
              </div>
              <div className="project-wrap">
                <div className="image">
                  <a href={project["url"]} target="_blank">
                    <img
                      src={
                        require(`../images/projects/${project["file_name"]}`)
                          .default
                      }
                      alt="project-thumb"
                    />
                  </a>
                </div>
                <div className="project-description">
                  <p>{project["description"]}</p>
                </div>
                <div className="links">
                  <a href={project["url"]} target="_blank">
                    <span>VIEW SITE</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="toggle-all-projects sticky">Hide</div>
    </div>
  );
});

export { FeaturedProjects, AllProjects };
