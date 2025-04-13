import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>🕵️‍♀️ Pequenos Detetives 🕵️‍♂️</h1>
        <h2>Um mundo de enigmas para crianças!</h2>
        
        <p className="intro-text">
          Bem-vindo aos Pequenos Detetives, um site interativo e cheio de mistérios 
          feito especialmente para crianças curiosas e espertas! 
          Embarca numa jornada divertida resolvendo enigmas simples, 
          criativos e educativos.
        </p>
        
        <div className="game-options">
          <Link to="/puzzles" className="game-option">
            <div className="option-icon">🎮</div>
            <h3>Enigmas Simples</h3>
            <p>Enigmas básicos de múltipla escolha</p>
          </Link>
          
          <Link to="/riddles" className="game-option">
            <div className="option-icon">❓</div>
            <h3>Advinhas Complicadas</h3>
            <p>Adivinhas tradicionais para resolver</p>
          </Link>
          
          <Link to="/detective" className="game-option">
            <div className="option-icon">🕵️</div>
            <h3>Enigmas de Detetive</h3>
            <p>Casos para solucionar como detetive</p>
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Para Crianças dos 5 aos 10 anos</h3>
          <p>Desafios adaptados para diferentes idades e competências</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>Estimula o Raciocínio</h3>
          <p>Desenvolve atenção, lógica e amplia o vocabulário</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Design Colorido</h3>
          <p>Interface amigável e divertida para os pequenos</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Fácil de Usar</h3>
          <p>Sem anúncios e totalmente seguro para crianças</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Preparado para desvendar os mistérios?</h2>
        <p>Entra nesta missão com os Pequenos Detetives!</p>
        <div className="cta-buttons">
          <Link to="/puzzles" className="cta-button">
            Enigmas Simples
          </Link>
          <Link to="/riddles" className="cta-button">
            Advinhas Complicadas
          </Link>
          <Link to="/detective" className="cta-button">
            Enigmas de Detetive
          </Link>
        </div>
      </div>
    </div>
  );
}
