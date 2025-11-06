import MainLayout from '../../components/MainLayout';

const NovaBotShowcase = () => {
  return (
    <MainLayout>
      <section className="card section" style={{ display: 'grid', gap: 16 }}>
        <h1 className="h1">Nova Discord Bot — Command Gallery</h1>
        <p className="text-muted" style={{ maxWidth: '72ch' }}>
          A modular Discord assistant using discord.py cogs. Below are a few representative commands and a
          screenshot of the bot in action. Repo includes setup steps and environment configuration.
        </p>

        <img
          src="/images/Nova_bot.png"
          alt="Nova Discord Bot screenshot"
          style={{ width: '100%', borderRadius: 'var(--radius)' }}
        />

        <div style={{ display: 'grid', gap: 8 }}>
          <h2 className="h2">Sample Commands</h2>
          <ul>
            <li>
              <code>/points</code> — show current points and leaderboard snippet
            </li>
            <li>
              <code>/daily</code> — claim daily points
            </li>
            <li>
              <code>/mod purge &lt;count&gt;</code> — delete the last N messages (mod only)
            </li>
            <li>
              <code>/announce &lt;message&gt;</code> — send a formatted announcement (manager/admin)
            </li>
            <li>
              <code>/uptime</code> — show bot uptime and status
            </li>
            <li>
              <code>/help</code> — list commands and usage
            </li>
          </ul>
        </div>

        <div className="btn-row">
          <a
            className="btn btn-ghost"
            href="https://github.com/Steven-Machin/discord_chatbot"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default NovaBotShowcase;
