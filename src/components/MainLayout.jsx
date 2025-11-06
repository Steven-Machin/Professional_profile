import { Link } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <div style={{ fontWeight: 700 }}>Steven Machin</div>
          <nav className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/resume">Resume</Link>
            <a className="nav-link" href="mailto:stmachin@gmail.com">Email</a>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
