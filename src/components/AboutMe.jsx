import profilePic from '../../public/images/profile.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-container container card">
      <h2 className="h2">About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic avatar" />

        <div className="about-text">
          <p className="tagline text-muted">
            <strong className="headline">Full Stack Developer</strong> &nbsp;•&nbsp; Operational Leader &nbsp;•&nbsp; Problem Solver
          </p>

          <p>
            I am a Full Stack Developer with a background in leadership, operations, and technical execution. I specialize in
            building responsive front-end interfaces and scalable back-end systems using modern web technologies. With hands-on
            experience in both independent and collaborative environments, I bring strong problem-solving skills, attention to
            detail, and a results-driven mindset to every project. My work is grounded in clean code, thoughtful design, and a
            focus on delivering practical, user-focused solutions.
          </p>

          <h3 className="h3">Key Competencies</h3>
          <ul>
            <li>Front-end development with React, Tailwind, and responsive design</li>
            <li>Back-end APIs using Node.js, Express, and MongoDB</li>
            <li>Database design and integration (MySQL, Sequelize, Mongoose)</li>
            <li>Team leadership, agile collaboration, and technical documentation</li>
          </ul>

          <h3 className="h3">Professional Values</h3>
          <ul>
            <li>Maintainable, well-documented code</li>
            <li>Accessible, user-first design</li>
            <li>Clear communication and continuous learning</li>
            <li>Creating tools that solve real problems for real people</li>
          </ul>

          <div className="about-links">
            <a href="https://github.com/Steven-Machin" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
            <a href="mailto:stmachin@gmail.com" className="btn btn-ghost">Email</a>
            <a
              href="/files/Steven_Machin_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download btn btn-primary"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
