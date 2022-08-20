import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <nav className="navbar navbar-light">
        <span className="navbar-text">
          This project was coded by Tetiana Bedina{" "}
          <a href="mailto:tibedina@gmail.com" title="Here is my email">
            tibedina@gmail.com
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/BeTetiana/react-weather-project"
            title="Here is my open-source code"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://snazzy-puppy-843486.netlify.app/"
            title="Netlify"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </span>
      </nav>
    </div>
  );
}
