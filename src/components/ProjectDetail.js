import { useLoaderData } from "react-router-dom";

const projects = require("../content/projects.json");

export async function loader({ params }) {
  return projects.find((project) => project["slug"] === params.projectSlug);
}

const ProjectDetail = () => {
  const project = useLoaderData();
  console.log(project);
  return (
    <div className="project-detail site-page">
      <div className="page-content"></div>
    </div>
  );
};

export default ProjectDetail;
