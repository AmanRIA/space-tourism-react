import React from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="main-section-home">
        <div className="text-box-home">
          <p className="head head-5">SO, YOU WANT TO TRAVEL TO</p>
          <p className="head head-1">SPACE</p>
          <p className="typography">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destination" className="link-button">
          <div className="circle"></div>
          <button className="btn">EXPLORE</button>
        </Link>
      </section>
    </main>
  );
}

export default Home;
