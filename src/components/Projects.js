import React, { useState } from 'react';
import photo1 from '../assets/projects-pictures/ss.png';
import screenshot from '../assets/projects-pictures/screenshot.jpeg';
import readmeGenerator from '../assets/projects-pictures/readmeGenerator.jpg';

function Projects() {
  const projectData = [
    { name: "Fantasy Team Builder", link: "", image: photo1 },
    { name: "Weather Dashboard", link: "", image: screenshot },
    { name: "Readme Generator", link: "", image: readmeGenerator }
  ]
  const [toggle, setToggle] = useState(true)
  return (
    <div id="projects" className="mt-5 mb-5 d-flex flex-column justify-content-center align-content-center">
      <div style={toggle ?{color: "blue"}: {color: "red"}}>{toggle ?"Hello": "Goodbye"}</div>
      <button type="button" onClick={() => setToggle(!toggle)}>Toggle</button>
      {projectData.map(project => {
        return (
          <>
            <h3 className="mt-5">{project.name}</h3>
            <a href={project.link}>
            <img id="project-picture" src={project.image} alt={project.name} className="my-1" />
            </a>
          </>
        )
      })}
    </div>
  )
};

export default Projects;