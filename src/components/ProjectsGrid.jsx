import styles from './ProjectsGrid.module.css';

const projects = [
  {
    id: 'finance',
    title: 'Personal Finance Analyzer',
    img: '/images/financial-analyzer.png',
    desc: 'A full personal finance platform that ingests banking CSVs, normalizes transactions, and automatically categorizes spending with customizable keyword rules. Delivers income/expense snapshots, category rollups, monthly trend analysis, merchant rankings, recurring charge detection, and budget comparisons in real time. Includes a Flask dashboard with authentication, CSV uploads, budget and category management, date/account/category filters, account-level summaries, Chart.js visualizations, and CSV/JSON exports. Persists data in SQLite via SQLAlchemy and ships with a CLI mode for quick terminal summaries and JSON output.',
    repo: 'https://github.com/Steven-Machin/financial_analyzer',
    live: 'https://financial-analyzer-kf5p.onrender.com/login',
  },
  {
    id: 'workday',
    title: 'Workday Task Manager',
    img: '/images/todo-app-dashboard.png',
    desc: 'A role-aware team operations platform built with Flask and SQLAlchemy that centralizes task management, shift scheduling, and internal communication for small organizations. Includes assignment priorities, tags, notes, recurrence, drag-and-drop FullCalendar scheduling, threaded group chat, uploads, read tracking, shared task lists, badges, streaks, profile insights, and a built-in assistant for summaries and planning. Supports role-based navigation, dark/light themes, sound and notification preferences, email/Discord reminders via Celery/Redis, and secure persistence using SQLAlchemy with PostgreSQL or SQLite.',
    repo: 'https://github.com/Steven-Machin/todo-list',
    live: 'https://todo-list-vram.onrender.com/login?next=%2F',
  },
  {
    id: 'nova-bot',
    title: 'Nova Discord Bot',
    img: '/images/Nova_bot.png',
    desc: 'Modular Discord assistant with a cog-based architecture for scalable commands. Community tools (points, leaderboards), moderation utilities, announcements, uptime monitoring, and robust error logging. Environment-based configuration for smooth cloud deploys.',
    repo: 'https://github.com/Steven-Machin/discord_chatbot',
    gallery: '/projects/nova-bot',
    fit: 'contain',
  },
  {
    id: 'api-dashboard',
    title: 'API Dashboard',
    img: '/images/api-dashboard.png',
    desc: 'React-based dashboard for exploring and testing APIs with tidy cards, endpoint metadata, and configurable request/response views. Built with Vite and a reusable component system for rapid extension.',
    repo: 'https://github.com/Steven-Machin/API_Dashboard',
    live: '',
  },
];

export default function ProjectsGrid() {
  return (
    <section className="card section">
      <h2 className="h2" style={{ marginBottom: 20 }}>
        My Work
      </h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.id} className={styles.cardWrap}>
            <img
              src={p.img}
              alt={`${p.title} screenshot`}
              className={`${styles.media} ${p.fit === 'contain' ? styles.mediaContain : ''}`}
            />

            <h3 className={styles.title}>{p.title}</h3>

            <p className={styles.desc}>{p.desc}</p>

            <div className={styles.actions}>
              {p.repo && (
                <a
                  className="btn btn-ghost"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repository
                </a>
              )}

              {p.live && p.live.trim() !== '' ? (
                <a
                  className="btn btn-primary"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : p.gallery ? (
                <a className="btn btn-primary" href={p.gallery}>
                  Command Gallery
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
}
