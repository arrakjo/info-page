import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="container">
      <h1>Fun facts about React</h1>
      <div className="content">
        <ul className="list-content">
          <li className="list-item">Originally released in 2013</li>
          <li className="list-item">Created by Jordan Walke</li>
          <li className="list-item">Has well over 100K stars on GitHub</li>
          <li className="list-item">Maintained by Meta</li>
          <li className="list-item">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
