import './Footer.css';

const Footer = () => {
  return (
    <footer className="container footer-container">
      <div className="card section footer-card">
        <span className="text-muted">Open to Full Stack / Python / JS roles.</span>
        <div className="btn-row">
          <a href="mailto:stmachin@gmail.com" className="btn btn-ghost">Email</a>
          <a href="https://github.com/Steven-Machin" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
