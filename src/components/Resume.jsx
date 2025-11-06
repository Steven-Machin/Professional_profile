import MainLayout from './MainLayout';
import KeyCompetencies from './KeyCompetencies';

const Resume = () => {
  return (
    <MainLayout>
      <section className="resume card">
        <h2 className="h2">Steven Machin</h2>
        <div className="resume-actions">
          <a href="mailto:stmachin@gmail.com" className="btn btn-ghost">Email</a>
          <a
            href="https://github.com/Steven-Machin"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/steven-machin-751690239"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href="/files/Steven_Machin_Resume.pdf"
            download
            aria-label="Download resume PDF"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        <h3 className="h3">Professional Summary</h3>
        <p>
          Results-driven operations leader and certified Full Stack Developer with over 10 years of experience in youth programming,
          aquatics operations, and team management. Proven record of leading departmental turnarounds, tracking KPIs, and driving
          performance improvements. Brings a strong foundation in leadership, safety compliance, and full stack web development using
          modern frameworks and tools.
        </p>

        <h3 className="h3">Technical Skills</h3>
        <ul>
          <li><strong>Languages & Frameworks:</strong> JavaScript (ES6+), Python, Node.js, Express.js, React.js</li>
          <li><strong>Database & ORM:</strong> MySQL, Sequelize, MongoDB, Mongoose</li>
          <li><strong>Web & Tools:</strong> HTML5, CSS3, Tailwind, Bootstrap, REST APIs, JSON, AJAX</li>
          <li><strong>Dev Tools:</strong> Git, GitHub, CLI, Postman, VS Code, Netlify, Heroku</li>
          <li><strong>Project & Ops Skills:</strong> Financial tracking, KPI reporting, team training, schedule management</li>
        </ul>

        <h3 className="h3">Work Experience</h3>
        <ul>
          <li>
            <strong>Supervisor, Kids Academy & Aquatics - Life Time</strong>
            <br />
            Chicago, IL | Aug 2023 - Present
            <ul>
              <li>Leads operations across two departments, including staff scheduling, event planning, and certification tracking</li>
              <li>Supports team leadership, safety oversight, and member experience across youth and aquatics programs</li>
              <li>Drives growth by analyzing KPIs and supporting strategic planning with department leadership</li>
            </ul>
          </li>
          <li>
            <strong>Aquatics Department Lead - Life Time</strong>
            <br />
            Chicago, IL | May 2021 - Aug 2023
            <ul>
              <li>Directed all staffing, financial, and programming operations for the Aquatics department</li>
              <li>Improved department connectivity ranking from bottom 50 to top 10 nationwide</li>
              <li>Led internal audits, maintained compliance, and drove high-performing team culture</li>
            </ul>
          </li>
          <li>
            <strong>Assistant Manager - Life Time</strong>
            <br />
            Canton, MI -> Chicago, IL | Apr 2018 - May 2021
            <ul>
              <li>Transferred to the high-performing Chicago market to support a $45,000/month Aquatics program</li>
              <li>Managed scheduling, payroll, training, and performance tracking for a large aquatics team</li>
              <li>Selected to assist a struggling Boston club and led a successful operational recovery during a critical summer season</li>
            </ul>
          </li>
        </ul>

        <h3 className="h3">Education</h3>
        <ul>
          <li><strong>Full Stack Developer Certificate</strong> - Northwestern University | Jan 2024</li>
          <li><strong>Associate of Arts</strong> - Washtenaw Community College | 2012-2014</li>
          <li><strong>Psychology Studies</strong> - Ashland University | 2010-2012</li>
        </ul>

        <h3 className="h3">Projects</h3>
        <ul>
          <li>
            <strong>Movies and Mocktails</strong> - A full stack app pairing movies with custom drink recipes
            <br />
            <a href="https://mocktails-and-movie.github.io/Mocktails-and-Movies/" target="_blank" rel="noreferrer">Live Site</a>
          </li>
          <li>
            <strong>DND Character Generator</strong> - Custom character creation tool with backend hosting
            <br />
            <a href="https://dnd-character-generator-app-3900836cda13.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</a>
          </li>
          <li>
            <strong>Workday Scheduler</strong> - Daily planner app with local storage and dynamic UI
            <br />
            <a href="https://steven-machin.github.io/workday_scheduler/" target="_blank" rel="noreferrer">Live Site</a>
          </li>
        </ul>
      </section>
      <KeyCompetencies />
    </MainLayout>
  );
};

export default Resume;
