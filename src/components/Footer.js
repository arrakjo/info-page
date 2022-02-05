import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="gh-logo">
        <img src={require("../img/github.png")} alt="GitHub" className="gh" />
      </div>
      <a className="gh-link" href="https://github.com/arrakjo">
        &copy; Joosep Arrak | 2022
      </a>
    </div>
  );
}

export default Footer;
