import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <span className="logo-icon">📝</span>
          <span>AutoBlog</span>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`header-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Articles
          </Link>
          <Link 
            to="/about" 
            className={`header-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About Project
          </Link>
          <Link 
            to="/about-me" 
            className={`header-link ${isActive('/about-me') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About Creator
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;