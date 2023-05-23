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
    desc: "Front end marketplace for a breakfast restaraunt.",
    github: "https://github.com/JoshuaToback/FullStacks-Cafe",
    live: "https://fullstackscafe.herokuapp.com/home.html",
    tech: [HTML, CSS, JS, Boot, Node]
  },

  {
    title: "Helmsdale Media",
    src: Helmsdale,
    desc: "Front end marketplace for a digitization service and publisher.",
    github: "https://github.com/JoshuaToback/helmsdalemedia",
    live: "https://www.helmsdalemedia.com/",
    tech: [HTML, CSS, JS, ReactLogo]
  }
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
