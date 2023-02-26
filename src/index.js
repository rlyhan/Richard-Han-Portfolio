import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App, ErrorPage } from "./components/App";
import MainPages from "./components/MainPages";
import ProjectDetail, {
  loader as projectDetailLoader,
} from "./components/ProjectDetail";
import "./index.scss";
import "./scss/_styles.scss";
import "./scss/nav.scss";
import "./scss/home.scss";
import "./scss/about.scss";
import "./scss/contact.scss";
import "./scss/projects.scss";
import "./scss/project_detail.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <MainPages /> },
      {
        path: "/projects/:projectSlug",
        element: <ProjectDetail />,
        loader: projectDetailLoader,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
