import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/styles/SideBar.scss";
import Logo from "../../assets/images/logo.svg";
import ChevronRight from "../../assets/images/chev-left.svg";

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="side-bar">
        <nav className={`menu ${!open && "close"}`}>
          <img
            src={ChevronRight}
            alt="this is the chevron to left side"
            className={`side-bar__pic ${!open && "rotate"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="menu__box">
            <Link to="/">
              <img
                src={Logo}
                alt="this is the site logo"
                className={`side-bar__logo ${open && "rotate-img"}`}
              />
            </Link>
            <h1
              className={`menu__title ${!open && "scale-off"} ${
                open && "scale-on"
              }`}
            >
              Web Developer
            </h1>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 96 960 960"
                  width="30"
                  className={`menu__pic ${!open && "change-color"}`}
                >
                  <path d="M232.154 863.846h146.565V621.731h202.562v242.115h146.565V491.602L480 304.82 232.154 491.342v372.504Zm-47.884 47.883V467.398L480 244.976 775.73 467.74v443.989H533.398V669.614H426.602v242.115H184.27ZM480 584.128Z" />
                </svg>
                <p
                  className={`menu__controller ${!open && "hidden"} ${(
                    isActive
                  ) => (isActive ? "active" : "inactive")}`}
                >
                  Home
                </p>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 96 960 960"
                  className={`menu__pic ${!open && "change-color"}`}
                >
                  <path d="M237.773 797.347q57.163-37.757 115.266-58.257 58.102-20.5 126.961-20.5 68.859 0 127 20.5 58.141 20.5 116.089 58.257 41.962-47.808 63.123-102.875 21.16-55.068 21.16-118.429 0-137.761-94.827-232.588T480 248.628q-137.718 0-232.545 94.827t-94.827 232.588q0 63.361 21.366 118.429 21.365 55.067 63.779 102.875ZM479.95 600.179q-54.027 0-90.77-36.794-36.743-36.793-36.743-90.82 0-54.026 36.793-90.77 36.794-36.743 90.82-36.743 54.027 0 90.77 36.794 36.743 36.793 36.743 90.82 0 54.026-36.793 90.769-36.794 36.744-90.82 36.744Zm-.22 351.076q-77.427 0-146.332-29.558-68.904-29.558-119.439-80.461t-79.875-119.207q-29.339-68.303-29.339-146.32 0-78.033 29.558-146.483 29.558-68.449 80.461-119.087 50.903-50.638 119.207-80.016 68.303-29.378 146.32-29.378 78.033 0 146.487 29.47 68.453 29.47 119.087 80.128t80.012 119.1q29.378 68.441 29.378 146.337 0 78.041-29.391 146.409t-80.128 119.172q-50.737 50.805-119.278 80.349-68.542 29.545-146.728 29.545Z" />
                </svg>
                <p className={`menu__controller ${!open && "hidden"}`}>About</p>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 96 960 960"
                  className={`menu__pic ${!open && "change-color"}`}
                >
                  <path d="M126.385 935.574q-24.81 0-42.5-17.793-17.692-17.793-17.692-42.354V467.718h47.884v407.665q0 4.615 3.75 8.462 3.75 3.846 8.558 3.846h589.421v47.883H126.385Zm115.768-115.767q-24.81 0-42.501-17.794-17.691-17.793-17.691-42.398V314.976H408.68v-71.69q0-24.582 17.691-42.375t42.501-17.793h138.536q24.265 0 42.235 17.793 17.971 17.793 17.971 42.375v71.69h226.718v444.639q0 24.605-17.97 42.398-17.97 17.794-42.222 17.794H242.153Zm214.41-504.831H619.73V243.31q0-4.616-3.846-8.462-3.846-3.847-8.462-3.847h-138.55q-4.808 0-8.559 3.847-3.75 3.846-3.75 8.462v71.666Z" />
                </svg>
                <p className={`menu__controller ${!open && "hidden"}`}>
                  Portfolio
                </p>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/form"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 96 960 960"
                  className={`menu__pic 
                    ${!open && "change-color"}
                   `}
                >
                  <path d="M112.912 741.549V236.257q0-13.666 10.75-24.826 10.75-11.161 24.16-11.161h491.409q13.487 0 24.404 11.122 10.916 11.122 10.916 24.865v330.614q0 13.667-10.916 24.827-10.917 11.16-24.404 11.16H251.603L112.912 741.549Zm174.011 33.846q-13.41 0-24.365-11.16-10.955-11.16-10.955-24.827v-68.665h478.14l12.693 12.693V337.423h69.742q13.41 0 24.16 11.327t10.75 25.07v539.856L708.807 775.395H286.923Z" />
                </svg>
                <p className={`menu__controller ${!open && "hidden"}`}>
                  Contact me
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default SideBar;
