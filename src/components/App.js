import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Outlet } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    window.location.reload();
  });

  return (
    <div className={`App ${navMenuOpen ? "nav-menu-open" : ""}`}>
      <Navbar navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
      <div className="pages-wrap">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
