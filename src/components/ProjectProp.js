import React from "react";

function ProjectProp(props) {
  return (
    <div className="projectProp">
      <h3>{props.title}</h3>
      <img alt={props.title} className="projectImage" src={props.src} />
      <p>{props.desc}</p>
      <div className="projectTech">
        {props.tech.map((icon, index) => (
          <img key={index} src={icon} alt={icon} />
        ))}
      </div>
      <div className="projectButtons">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <button id="githubButton">Github</button>
        </a>
        <a href={props.live} target="_blank" rel="noopener noreferrer">
          <button id="liveButton">Live</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectProp;

