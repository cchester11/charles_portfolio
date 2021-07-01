import React from 'react';
import photo1 from '../assets/projects-pictures/ss.png';
import screenshot from '../assets/projects-pictures/screenshot.jpeg';
import readmeGenerator from '../assets/projects-pictures/readmeGenerator.jpg';

function Projects () {
  return (
    <div className="mt-5 mb-5 d-flex flex-column justify-content-center align-content-center">
      <h3 className="mt-5">Fantasy Team Builder</h3>
      <img src={photo1} alt="Fantasy Team Builder" className="my-1" />
      <h3 className="mt-5">Weather Dashboard</h3>
      <img src={screenshot} alt="Weather Dashboard Project" className="my-1" />
      <h3 className="mt-5">Readme Generator</h3>
      <img src={readmeGenerator} alt="readmeGenerator" className="my-1" />
    </div>
  )
};

export default Projects;