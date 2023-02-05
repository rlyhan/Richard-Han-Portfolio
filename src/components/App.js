import { Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import { PAGE_IDS } from "../constants";

function App() {
  const { hash } = useLocation();
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const handleSetPage = (page) => {
    setCurrentPage(page);
    const newPage = document.getElementById(page);
    gsap.set(window, {
      scrollTo: newPage,
    });
  };

  useEffect(() => {
    if (hash) {
      const hashVal = hash.split("#")[1];
      if (Object.values(PAGE_IDS).includes(hashVal)) {
        handleSetPage(hashVal);
      }
    }
  }, [hash]);

  return (
    <div className={`App ${navMenuOpen ? "nav-menu-open" : ""}`}>
      <Navbar
        handleSetPage={handleSetPage}
        currentPage={currentPage}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      <div className="pages-wrap">
        <Outlet context={[currentPage, setCurrentPage]} />
      </div>
    </div>
  );
}

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p>
        This page does not exist. <a href="/">Click here to return home</a>
      </p>
    </div>
  );
};

export { App, ErrorPage };
