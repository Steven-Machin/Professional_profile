const Projects = () => {
  return (
    <section id="work">
      <div className="card">
        <h2 className="h2">My Work</h2>
        <div className="project-grid">
          {/* Personal Finance Analyzer */}
          <div className="project-card">
            <img
              src="images/financial-analyzer.png"
              alt="Personal Finance Analyzer"
              className="project-img"
            />
            <h3 className="h3">Personal Finance Analyzer</h3>
            <p>
              A Python-based financial analyzer that ingests CSV bank data, categorizes spending, and
              visualizes monthly trends. Features clean UI, secure local storage, and exportable
              summaries.
            </p>
            <div className="project-links">
              <a href="https://github.com/Steven-Machin/finance-analyzer" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
              <a href="https://financial-analyzer-kf5p.onrender.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
            </div>
          </div>

          {/* Workday Task Manager */}
          <div className="project-card">
            <img
              src="images/todo-app-dashboard.png"
              alt="Workday Task Manager"
              className="project-img"
            />
            <h3 className="h3">Workday Task Manager</h3>
            <p>
              A full-stack dashboard built with React, Node.js, and MongoDB. Combines task assignment,
              reminders, group chat, overdue alerts, and team management into one streamlined app.
            </p>
            <div className="project-links">
              <a href="https://github.com/Steven-Machin/workday-task-manager" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
              <a href="https://todo-list-vram.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
            </div>
          </div>

          {/* Nova Discord Bot */}
          <div className="project-card">
            <img
              src="/images/Nova_bot.png"
              alt="Nova Discord Bot screenshot"
              style={{ width: "100%", borderRadius: "var(--radius)", marginBottom: 16 }}
            

            />
            <h3 className="h3">Nova Discord Bot</h3>
            <p className="text-muted" style={{ marginBottom: '12px' }}>
              A modular Discord assistant built with a cog-based architecture for clean, scalable
              command organization. Includes community engagement tools, point tracking, lightweight
              leaderboards, and fun interactive commands. Features a robust moderation toolkit,
              utility cogs for announcements and uptime monitoring, and strong error handling and
              logging for reliability. Environment-driven configuration enables flexible local or
              cloud deployments.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Steven-Machin/Nova_Discord_Bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                View Repository
              </a>
              {/* Replace href with Render URL once deployed */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Live Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
