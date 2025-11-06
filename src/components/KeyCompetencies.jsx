import styles from './KeyCompetencies.module.css';

const KeyCompetencies = () => {
  return (
    <section className={`card section ${styles.section}`}>
      <h2 className="h2">Key Competencies</h2>

      <div className={styles.grid}>
        <div>
          <h3 className="h3">Front-End Development</h3>
          <ul>
            <li>Responsive interfaces with React and React Router</li>
            <li>Styling with CSS Modules and Tailwind</li>
            <li>Clean UI layouts, reusable components, accessible markup</li>
          </ul>
        </div>

        <div>
          <h3 className="h3">Back-End &amp; APIs</h3>
          <ul>
            <li>RESTful APIs with Node.js, Express, and Python Flask</li>
            <li>Routing, controllers, basic auth flows</li>
            <li>ORM layers with Sequelize (SQL) and Mongoose (MongoDB)</li>
          </ul>
        </div>

        <div>
          <h3 className="h3">Databases &amp; Data</h3>
          <ul>
            <li>Relational schemas with MySQL or PostgreSQL</li>
            <li>Document modeling with MongoDB</li>
            <li>CRUD operations, indexing, pragmatic data modeling</li>
          </ul>
        </div>

        <div>
          <h3 className="h3">Full-Stack Workflow</h3>
          <ul>
            <li>Git/GitHub branches, commits, pull requests</li>
            <li>Deployments on Netlify and Render</li>
            <li>Vite and npm for fast dev cycles</li>
          </ul>
        </div>

        <div>
          <h3 className="h3">Problem Solving</h3>
          <ul>
            <li>Two-pointers, sliding window, stacks, hash maps</li>
            <li>Recursion and dynamic programming fundamentals</li>
            <li>Translating DS&amp;A into clear production-style code</li>
          </ul>
        </div>

        <div>
          <h3 className="h3">Leadership &amp; Collaboration</h3>
          <ul>
            <li>Team leadership and operational improvements</li>
            <li>Clear documentation and communication</li>
            <li>Mentoring and structured problem solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyCompetencies;
