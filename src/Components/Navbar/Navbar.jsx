import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg top-0 padding position-relative navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold logo" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <a
                  href="#About"
                  className="nav-link text-white rounded-2 fw-bold"
                >
                  About
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="#skills"
                  className="nav-link text-white rounded-2 fw-bold"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="#education"
                  className="nav-link text-white rounded-2 fw-bold"
                >
                  Education
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="#projects"
                  className="nav-link text-white rounded-2 fw-bold"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
