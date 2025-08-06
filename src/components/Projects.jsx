const Projects = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="project-grid">

        <div className="project-card">
          <img src="images/weather-dashboard.png" alt="Weather Dashboard" className="project-img" />
          <h3>Weather Dashboard</h3>
          <p>
            An interactive weather dashboard that can find the weather anywhere in the world. It uses the OpenWeatherMap API and updates UI dynamically based on user input.
          </p>
          <div className="project-links">
            <a href="https://github.com/Steven-Machin/WeatherDashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <img src="images/stock-logo.jpg" alt="Stock Logo Generator" className="project-img" />
          <h3>Stock Logo Generator</h3>
          <p>
            A project showcasing a stock logo generator. Users can create custom logos with various styles and elements through a user-friendly interface.
          </p>
          <div className="project-links">
            <a href="https://github.com/Steven-Machin/homeworkweekten" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <img src="images/Workday_Scheduler.png" alt="Workday Scheduler" className="project-img" />
          <h3>Workday Scheduler</h3>
          <p>
            A simple workday scheduler application to help organize daily tasks. It saves events in local storage and adapts visually to the current time.
          </p>
          <div className="project-links">
            <a href="https://steven-machin.github.io/workday_scheduler/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
