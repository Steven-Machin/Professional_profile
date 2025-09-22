const Projects = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="project-grid">

        {/* Financial Analyzer */}
        <div className="project-card">
          <img
            src="images/Financial_anazlyer.png"
            alt="Financial Analyzer"
            className="project-img"
          />
          <h3>Financial Analyzer</h3>
          <p>
            A financial data analyzer that helps track trends, surface insights, and support faster
            decision-making for investors and budget planners.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Steven-Machin/financial_analyzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://financial-analyzer-kf5p.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Weather Dashboard */}
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

        {/* Stock Logo Generator */}
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

        {/* Workday Scheduler */}
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

        {/*To Do Task Manager */}
        <div className="project-card">
          <img
            src="images/todo-app-dashboard.png"
            alt="Workday Dashboard"
            className="project-img"
          />
          <h3> To Do Task Manager</h3>
          <p>
            A full-stack dashboard built with React and Node.js that combines task assignment,
            reminders, group chat, overdue alerts, and team management into a single streamlined app.
            Designed to help shift-based teams communicate clearly and stay organized.
          </p>
          <div className="project-links">
            <a href="https://github.com/Steven-Machin/todo-list" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

