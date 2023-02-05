import React, { useRef } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getListNumbering } from "../helpers";

const projects = require("../content/projects.json");

export async function loader({ params }) {
  return projects.find((project) => project["slug"] === params.projectSlug);
}

const ProjectDetail = () => {
  const project = useLoaderData();
  const ref = useRef(null);

  return (
    <div className="project-detail site-page" ref={ref}>
      <div className="page-content">
        <div className="project-header">
          <div className="project-heading">
            <span className="project-number">
              {getListNumbering(project["id"])} /
            </span>
            <a href={project["url"]} target="_blank" className="project-title">
              {project["name"]}
            </a>
          </div>
          <div className="project-subheading">
            <div className="project-attributes">
              <span>{project["association"]}&nbsp;/&nbsp;</span>
              <span>{project["category"]}&nbsp;/</span>
            </div>
            <div className="project-links">
              <span>
                <a href={project["url"]} target="_blank">
                  Visit website
                </a>
              </span>
              {project["best_awards_url"] && (
                <span>
                  &nbsp;/&nbsp;
                  <a href={project["best_awards_url"]} target="_blank">
                    View on Best Awards
                  </a>
                  &nbsp;/
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="project-info">
            <p className="project-info-subheading">About</p>
            <p className="project-description">{project["description"]}</p>
            <p className="project-info-subheading">Work involved</p>
            <ul className="project-work">
              {project["work_involved"].map((work, index) => {
                return <li key={index}>+&nbsp;{work}</li>;
              })}
            </ul>
          </div>
          <div className="project-gallery">
            {project["images"].map((image, index) => {
              return (
                <div className="project-image" key={index}>
                  <img
                    src={require(`../images/projects/${image}`).default}
                    alt={`${project["name"]} ${index}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/" className="return-link" reloadDocument>
          {"← Back"}
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
