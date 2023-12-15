// components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="project">
        <img src="images/weather-dashboard.png" alt="Weather Dashboard" />
        <h3>Weather Dashboard</h3>
        <p>An interactive weather dashboard that can find the weather anywhere in the world. Features include...</p>
        <a href="https://github.com/Steven-Machin/WeatherDashboard" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <img src="images/stock-logo.jpg" alt="Stock Logo" />
        <h3>Stock Logo</h3>
        <p>A project showcasing a stock logo generator. Users can create custom logos with various styles and elements...</p>
        <a href="https://github.com/Steven-Machin/homeworkweekten" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <img src="images/Workday_Scheduler.png" alt="Workday Scheduler" />
        <h3>Workday Scheduler</h3>
        <p>A simple workday scheduler application to help you organize your daily tasks. Easily plan and manage your work hours with this intuitive scheduler.</p>
        <a href="https://steven-machin.github.io/workday_scheduler/" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </section>
  );
};

export default Projects;

