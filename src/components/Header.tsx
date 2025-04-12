import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Header.css';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>🕵️‍♂️ Pequenos Detetives 🕵️‍♀️</h1>
        </Link>
      </div>
      
      <button 
        className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu Principal"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
          </li>
          <li>
            <Link to="/puzzles" onClick={() => setMenuOpen(false)}>Enigmas</Link>
          </li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
