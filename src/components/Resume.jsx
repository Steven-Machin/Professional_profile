// Resume.jsx

import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Steven Machin</h2>
      <p>Email: stmachin@gmail.com</p>
      <p>Github: <a href="https://github.com/Steven-Machin">https://github.com/Steven-Machin</a></p>

      <h3>About Me</h3>
      <p>
        Full Stack Developer passionate about learning and implementing new things.
        Enjoys solving problems and maintaining composure under pressure.
      </p>

      <h3>Technical Skills</h3>
      <ul>
        <li>HTML</li>
        <li>Advanced CSS</li>
        <li>JavaScript</li>
        <li>Web APIs</li>
        <li>Third Party APIs</li>
        <li>Server Side APIs</li>
        <li>Node.js</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>ORM (Object-Relational Mapping)</li>
        <li>MVC (Model-View-Controller)</li>
        <li>Computer Science Fundamentals (CS)</li>
        <li>NoSQL</li>
        <li>Progressive Web Apps (PWA)</li>
        <li>React</li>
        <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
      </ul>

      <h3>Education</h3>
      <p>Northwestern Bootcamp- Graduated January 2024 (Pending)</p>

<h3>Projects</h3>
<ul>
  <li>
    <strong>Movies and Mocktails</strong> - A web application for exploring movies and mocktail recipes.
    [Link: <a href="https://mocktails-and-movie.github.io/Mocktails-and-Movies/">Mocktails and Movies</a>]
  </li>
  <li>
    <strong>DND Character Generator</strong> - An online tool for generating Dungeons & Dragons characters.
    [Link: <a href="https://dnd-character-generator-app-3900836cda13.herokuapp.com/">DND Character Generator</a>]
  </li>
  {/* Add more projects as needed */}
</ul>

    </div>
  );
};

export default Resume;
