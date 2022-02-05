import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img
            src={require("../img/logo.png")}
            width="40px"
            alt="React"
            className="nav-img"
          />
          <h2>React.js</h2>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">Documentation</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Examples</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
