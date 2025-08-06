import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/portfolio" className="footer-link">Portfolio</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
        <Link to="/resume" className="footer-link">Resume</Link>
      </div>
    </footer>
  );
};

export default Footer;
