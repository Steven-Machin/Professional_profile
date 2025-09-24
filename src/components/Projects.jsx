const Projects = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="project-grid">

        {/* Personal Finance Analyzer */}
        <div className="project-card">
          <img
            src="images/financial-analyzer.png"
            alt="Personal Finance Analyzer"
            className="project-img"
          />
          <h3>Personal Finance Analyzer</h3>
          <p>
            A Python-based financial analyzer that ingests CSV bank data, categorizes spending, and
            visualizes monthly trends. Features clean UI, secure local storage, and exportable
            summaries.
          </p>
          <div className="project-links">
            <a href="https://github.com/Steven-Machin/finance-analyzer" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://finance-analyzer-render.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Workday Task Manager */}
        <div className="project-card">
          <img
            src="images/todo-app-dashboard.png"
            alt="Workday Task Manager"
            className="project-img"
          />
          <h3>Workday Task Manager</h3>
          <p>
            A full-stack dashboard built with React, Node.js, and MongoDB. Combines task assignment,
            reminders, group chat, overdue alerts, and team management into one streamlined app.
          </p>
          <div className="project-links">
            <a href="https://github.com/Steven-Machin/workday-task-manager" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://todo-list-vram.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
