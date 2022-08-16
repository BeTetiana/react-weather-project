import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <nav className="navbar navbar-light">
        <span className="navbar-text">
          <a
            href="https://github.com/BeTetiana/react-weather-project"
            title="Here is my open-source code"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Tetiana Bedina{" "}
          <a href="mailto:tibedina@gmail.com" title="Here is my email">
            tibedina@gmail.com
          </a>
        </span>
      </nav>
    </div>
  );
}
