import profilePic from '../../public/images/profile.jpg';
import './AboutMe.css';
import MainLayout from './MainLayout';
import KeyCompetencies from './KeyCompetencies';

const AboutMe = () => {
  return (
    <MainLayout>
      <section className="card section stack" style={{ '--stack-gap': '20px' }}>
        <h1 className="h1">About Me</h1>

        <div className="about-hero">
          <img src={profilePic} alt="Steven Machin" className="avatar" />
          <div className="prose">
            <div className="text-muted about-tagline">
              Full Stack Developer &middot; Operational Leader &middot; Problem Solver
            </div>
            <p>
              I am a Full Stack Developer with a background in leadership, operations, and technical execution. I specialize in
              building responsive front-end interfaces and scalable back-end systems using modern web technologies. With hands-on
              experience in both independent and collaborative environments, I bring strong problem-solving skills, attention to
              detail, and a results-driven mindset to every project. My work is grounded in clean code, thoughtful design, and a
              focus on delivering practical, user-focused solutions.
            </p>
          </div>
        </div>

        <div className="about-values stack" style={{ '--stack-gap': '12px' }}>
          <h2 className="h2">Professional Values</h2>
          <ul>
            <li>Maintainable, well-documented code</li>
            <li>Accessible, user-first design</li>
            <li>Clear communication and continuous learning</li>
            <li>Creating tools that solve real problems for real people</li>
          </ul>
        </div>

        <div className="btn-row">
          <a href="https://github.com/Steven-Machin" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
          <a href="mailto:stmachin@gmail.com" className="btn btn-ghost">Email</a>
          <a
            href="/files/Steven_Machin_Resume.pdf"
            download
            aria-label="Download resume PDF"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </section>

      <KeyCompetencies />
    </MainLayout>
  );
};

export default AboutMe;

