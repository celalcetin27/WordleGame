import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GuessNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          WORLDE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#guessEnter">
                Check
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#letter">
                Letter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#key">
                Key
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default GuessNav;
