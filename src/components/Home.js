import React, { forwardRef } from "react";
import { PAGE_IDS } from "../constants";

const Home = forwardRef((props, ref) => {
  return (
    <div className="home site-page" id={PAGE_IDS.HOME} ref={ref}>
      <div className="page-content column-layout">
        <h1 className="title">
          Bringing
          <br />
          modern
          <br />
          visions to life
        </h1>
        <h2 className="subtitle">
          Creative developer currently based in Wellington, New Zealand
        </h2>
      </div>
    </div>
  );
});

export default Home;
