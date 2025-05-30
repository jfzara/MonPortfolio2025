
// components/Header.js
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h2>Alex Dupont</h2>
          <span className="logo-subtitle">Développeur Junior</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className={isActive('/')}>
            Accueil
          </Link>
          <Link to="/projects" className={isActive('/projects')}>
            Projets
          </Link>
          <Link to="/skills" className={isActive('/skills')}>
            Compétences
          </Link>
          <Link to="/blog" className={isActive('/blog')}>
            Blog
          </Link>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;