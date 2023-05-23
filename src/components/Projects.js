import React from "react";

import FullStacks from "../images/fullstacks.png";
import Helmsdale from "../images/HelmsdaleMedia.png";
import ProjectProp from "./ProjectProp";

import HTML from "../images/html.svg";
import CSS from "../images/css.png";
import JS from "../images/js.png";
import Boot from "../images/bootstrap.png";
import Node from "../images/node.png";
import ReactLogo from "../images/react.png";

const projects = [
  {
    title: "FullStacks Cafe",
    src: FullStacks,
    desc: "Fullstacks Cafe is a full stack, MVC dual application that allows potential customers of a restaraunt to select items from a menu, review and place orders that are stored locally. It also allows employees to access a password-locked CLI that can adjust prices, menu options, and review orders.",
    github: "https://github.com/JoshuaToback/FullStacks-Cafe",
    live: "https://fullstackscafe.herokuapp.com/home.html",
    tech: [HTML, CSS, JS, Boot, Node],
  },

  {
    title: "Helmsdale Media",
    src: Helmsdale,
    desc: "Helmsdale Media is a digital storefront built for customers to contact the owner and discuss the digitization of old footage, photos, and other vintage video/photos.",
    github: "https://github.com/JoshuaToback/helmsdalemedia",
    live: "https://www.helmsdalemedia.com/",
    tech: [HTML, CSS, JS, ReactLogo],
  },
];

function Projects() {
  return (
    <center className="projects">
      <h2>Projects</h2>
      {projects.map((projectProp, index) => (
        <ProjectProp
          key={index}
          title={projectProp.title}
          src={projectProp.src}
          desc={projectProp.desc}
          github={projectProp.github}
          live={projectProp.live}
          tech={projectProp.tech}
        />
      ))}
    </center>
  );
}

export default Projects;
