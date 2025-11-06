import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav className="header-nav nav-links">
          <Link to="/" className="header-link nav-link">Home</Link>
          <Link to="/portfolio" className="header-link nav-link">Portfolio</Link>
          <Link to="/contact" className="header-link nav-link">Contact</Link>
          <Link to="/resume" className="header-link nav-link">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
