// src/components/AboutMe.jsx

import React from 'react';
import profilePic from '../../public/images/profile.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <p>
          Hello, I'm Steven Machin! 👋 As a Full Stack Developer, I thrive on turning ideas into reality through code.
          Whether it's crafting elegant front-end interfaces or designing robust back-end systems, I'm passionate about
          the entire development process. I love learning new technologies, solving complex problems, and embracing
          challenges that come my way. When I'm not immersed in the world of coding, you'll find me exploring the latest
          trends in tech, enjoying a cup of coffee, or bringing creativity to life through various personal projects.
        </p>
      </div>
      <div className="about-links">
        <a href="https://github.com/Steven-Machin" target="_blank">
          GitHub
        </a>
        <a href="mailto:stmachin@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default AboutMe;
