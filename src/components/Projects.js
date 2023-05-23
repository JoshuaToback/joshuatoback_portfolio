import React from "react";

import FullStacks from "../images/fullstacks.png";
import Helmsdale from "../images/HelmsdaleMedia.png";
import ProjectProp from "./ProjectProp";

const projects = [
  {
    title: "FullStacks Cafe",
    src: FullStacks,
    desc: "Front end marketplace for a breakfast restaraunt.",
    github: "https://github.com/JoshuaToback/FullStacks-Cafe",
    live: "https://fullstackscafe.herokuapp.com/home.html"
  },

  {
    title: "Helmsdale Media",
    src: Helmsdale,
    desc: "Front end marketplace for a digitization service and publisher.",
    github: "https://github.com/JoshuaToback/helmsdalemedia",
    live: "https://www.helmsdalemedia.com/"
  }
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((projectProp, index) => (
        <ProjectProp
          key={index}
          title={projectProp.title}
          src={projectProp.src}
          desc={projectProp.desc}
          github={projectProp.github}
          live={projectProp.live}
        />
      ))}
    </div>
  );
}

export default Projects;
