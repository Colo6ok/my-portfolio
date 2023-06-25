import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import "../../assets/styles/Home.scss";
import { Link } from "react-router-dom";
// import ProgrammingPic from "../../assets/images/laptop.avif";
// import SoftWarePic from "../../assets/images/software.avif";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd", "Web Developer"],
      typeSpeed: 40,
      startDelay: 300,
      loop: false,
      cursorChar: null,
    });
  }, []);

  return (
    <>
      <section className="home-page">
        <h1 className="home__title">
          <span className="home__controller">H</span>
          <span className="home__controller">i,</span>
          <br />
          <span className="home__controller">I'</span>
          <span className="home__controller">m</span>
          <span className="controller__wrapper">
            <span className="home__controller high-light-color">O</span>
            <span className="home__controller">l</span>
            <span className="home__controller">i</span>
            <span className="home__controller">m</span>
            <span className="home__controller">j</span>
            <span className="home__controller">o</span>
            <span className="home__controller">n</span>
          </span>
          <br />
          <span className="home__controller high-light-color">W</span>
          <span className="home__controller">e</span>
          <span className="home__controller">b</span>
          <span className="controller__wrapper">
            <span className="home__controller high-light-color">D</span>
            <span className="home__controller">e</span>
            <span className="home__controller">v</span>
            <span className="home__controller">e</span>
            <span className="home__controller">l</span>
            <span className="home__controller">o</span>
            <span className="home__controller">p</span>
            <span className="home__controller">e</span>
            <span className="home__controller">r</span>
            <span className="home__controller">.</span>
          </span>
        </h1>
        <p ref={el} className="home__desc"></p>
        <Link to="form" className="home__link">
          contact me
        </Link>
        <span className="home-sircle"></span>
        <span className="home-second-sircle"></span>
      </section>
    </>
  );
}

export default Home;
