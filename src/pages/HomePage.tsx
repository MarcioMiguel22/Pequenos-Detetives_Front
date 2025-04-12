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
        
        <Link to="/puzzles" className="start-button">
          Começar a Aventura!
        </Link>
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
        <Link to="/puzzles" className="cta-button">
          Resolver Enigmas Agora
        </Link>
      </div>
    </div>
  );
}
