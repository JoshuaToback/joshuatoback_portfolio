import React from "react";
import { SocialIcon } from "react-social-icons";

import HTML from "../images/html.svg";
import CSS from "../images/css.png";
import JS from "../images/js.png";
import Boot from "../images/bootstrap.png";
import Node from "../images/node.png";
import ReactLogo from "../images/react.png";
import { Link } from "react-scroll";
import Headshot from "../images/headshot.png"

function Hero() {
  return (
    <center className="hero">
      <div className="hero-info">
        <h1>Joshua Toback</h1>
        <h2>Front End React Developer</h2>
        <img
        className="profile-picture"
        src={Headshot}
        alt="Profile"
      ></img>
        <p>
          Hello, I'm Joshua Toback. I'm a driven and creative Front-End React
          Developer based in Studio City, California.
        </p>
      </div>

      <div className="hero-links">
        <div className="hero-social">
          <SocialIcon url="https://linkedin.com/in/joshua-toback" />
        </div>
        <div className="hero-social">
          <SocialIcon url="https://github.com/JoshuaToback" />
        </div>
      </div>

      <div className="hero-stack">
        <h3>Tech Stack</h3>
        <div className="hero-stack-items">
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={JS} alt="JavaScript" />
          <img src={Boot} alt="Bootstrap" />
          <img src={Node} alt="Node" />
          <img src={ReactLogo} alt="React" />
        </div>
      </div>
      <Link smooth spy to="projects">
        <button className="projectsBtn">PROJECTS</button>
      </Link>
    </center>
  );
}

export default Hero;
