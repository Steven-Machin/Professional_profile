import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav className="header-nav nav-links">
          <Link to="/" className="header-link nav-link">Home</Link>
          <Link to="/portfolio" className="header-link nav-link">Portfolio</Link>
          <Link to="/resume" className="header-link nav-link">Resume</Link>
          <a href="mailto:stmachin@gmail.com" className="header-link nav-link">Email</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

