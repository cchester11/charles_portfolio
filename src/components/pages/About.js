import React from 'react';
import solarsystem from '../../assets/cover-picture/solarsystem.jpeg'

const About = () => (
  <div id="about" className="container-fluid">
    <h1>Charles Chester</h1>
    <section>
      Hello. I am a full-stack web developer specializing in (MERN) development.
    </section>
    <img src={solarsystem} style={{ width: "100%" }} alt="cover" />
  </div>
);

export default About;