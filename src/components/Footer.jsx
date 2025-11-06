import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-links nav-links">
          <Link to="/" className="footer-link nav-link">Home</Link>
          <Link to="/portfolio" className="footer-link nav-link">Portfolio</Link>
          <Link to="/contact" className="footer-link nav-link">Contact</Link>
          <Link to="/resume" className="footer-link nav-link">Resume</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
