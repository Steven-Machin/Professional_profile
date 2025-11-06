import styles from './ProjectsGrid.module.css';

const projects = [
  {
    id: 'finance',
    title: 'Personal Finance Analyzer',
    img: '/images/financial-analyzer.png',
    desc: 'A Python-based financial analyzer that ingests CSV bank data, categorizes spending, and visualizes monthly trends. Clean UI, secure local storage, exportable summaries.',
    repo: 'https://github.com/Steven-Machin/finance-analyzer',
    live: 'https://financial-analyzer-kf5p.onrender.com/login',
  },
  {
    id: 'workday',
    title: 'Workday Task Manager',
    img: '/images/todo-app-dashboard.png',
    desc: 'A full-stack dashboard built with React, Node.js, and MongoDB. Combines task assignment, reminders, group chat, overdue alerts, and team management into one streamlined app.',
    repo: 'https://github.com/Steven-Machin/workday-task-manager',
    live: 'https://todo-list-vram.onrender.com',
  },
  {
    id: 'nova-bot',
    title: 'Nova Discord Bot',
    img: '/images/Nova_bot.png',
    desc: 'Modular Discord assistant with cog-based architecture for scalable commands. Community tools (points, leaderboards), moderation utilities, announcements, uptime monitoring, and robust error logging. Env-based config for smooth cloud deploys.',
    repo: 'https://github.com/Steven-Machin/Nova_Discord_Bot',
    live: '#',
  },
];

const ProjectsGrid = () => {
  return (
    <section className="card section">
      <h2 className="h2" style={{ marginBottom: 12 }}>
        My Work
      </h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={`card ${styles.card}`}>
            <img
              src={project.img}
              alt={`${project.title} screenshot`}
              className={styles.media}
            />
            <div className={styles.content}>
              <h3 className={`h3 ${styles.title}`}>{project.title}</h3>
              <p className={styles.desc}>{project.desc}</p>
            </div>
            <div className={styles.actions}>
              {project.repo && (
                <a
                  className="btn btn-ghost"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              )}
              {project.live && project.live !== '#' ? (
                <a
                  className="btn btn-primary"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <span
                  className="btn btn-ghost"
                  aria-disabled="true"
                  style={{ opacity: 0.6 }}
                >
                  Live Demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
