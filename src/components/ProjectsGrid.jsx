import styles from './ProjectsGrid.module.css';

const projects = [
  {
    id: 'finance',
    title: 'Personal Finance Analyzer',
    img: '/images/financial-analyzer.png',
    desc: 'A full personal finance platform that ingests banking CSVs, normalizes transactions, and automatically categorizes spending with customizable keyword rules. Delivers income/expense snapshots, category rollups, monthly trend analysis, merchant rankings, recurring charge detection, and budget comparisons in real time. Includes a Flask dashboard with authentication, CSV uploads, budget and category management, date/account/category filters, account-level summaries, Chart.js visualizations, and CSV/JSON exports. Persists data in SQLite via SQLAlchemy and ships with a CLI mode for quick terminal summaries and JSON output.',
    repo: '#',
    live: '#',
  },
  {
    id: 'workday',
    title: 'Workday Task Manager',
    img: '/images/todo-app-dashboard.png',
    desc: 'A role-aware team operations platform built with Flask and SQLAlchemy that centralizes task management, shift scheduling, and internal communication for small organizations. Includes assignment priorities, tags, notes, recurrence, drag-and-drop FullCalendar scheduling, threaded group chat, uploads, read tracking, shared task lists, badges, streaks, profile insights, and a built-in assistant for summaries and planning. Supports role-based navigation, dark/light themes, sound and notification preferences, email/Discord reminders via Celery/Redis, and secure persistence using SQLAlchemy with PostgreSQL or SQLite.',
    repo: '#',
    live: '#',
  },
  {
    id: 'nova-bot',
    title: 'Nova Discord Bot',
    img: '/images/Nova_bot.png',
    desc: 'Modular Discord assistant with a cog-based architecture for scalable commands. Community tools (points, leaderboards), moderation utilities, announcements, uptime monitoring, and robust error logging. Environment-based configuration for smooth cloud deploys.',
    repo: '#',
    live: '#',
    fit: 'contain',
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
              {p.live && (
                <a
                  className="btn btn-primary"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
