import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Outlet } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className={`App ${navMenuOpen ? "nav-menu-open" : ""}`}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      <div className="pages-wrap">
        <Outlet context={[currentPage, setCurrentPage]} />
      </div>
    </div>
  );
}

export default App;
