// pages/Home.js
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Salut, je suis <span className="highlight">Alex Dupont</span>
            </h1>
            <h2 className="hero-subtitle">Développeur Web Junior passionné</h2>
            <p className="hero-description">
              Je crée des applications web modernes et intuitives avec React, Node.js et les dernières technologies. 
              Toujours en quête d'apprentissage et de nouveaux défis !
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                Voir mes projets
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <img src="/api/placeholder/250/250" alt="Alex Dupont" className="profile-img" />
              <div className="status-indicator">
                <span className="status-dot"></span>
                Disponible pour un poste
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>12+</h3>
            <p>Projets réalisés</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p>Technologies maîtrisées</p>
          </div>
          <div className="stat-item">
            <h3>2</h3>
            <p>Années d'apprentissage</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Motivation</p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <div className="section-header">
          <h2>Technologies que j'utilise</h2>
          <p>Mes outils de prédilection pour créer des applications performantes</p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-items">
              <span className="tech-item">React</span>
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">HTML5</span>
              <span className="tech-item">CSS3</span>
              <span className="tech-item">TailwindCSS</span>
            </div>
          </div>
          
          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-items">
              <span className="tech-item">Node.js</span>
              <span className="tech-item">Express</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">PostgreSQL</span>
              <span className="tech-item">API REST</span>
            </div>
          </div>
          
          <div className="tech-category">
            <h3>Outils</h3>
            <div className="tech-items">
              <span className="tech-item">Git</span>
              <span className="tech-item">VS Code</span>
              <span className="tech-item">Figma</span>
              <span className="tech-item">Postman</span>
              <span className="tech-item">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="recent-projects">
        <div className="section-header">
          <h2>Projets récents</h2>
          <Link to="/projects" className="see-all-link">Voir tous les projets →</Link>
        </div>
        
        <div className="projects-preview">
          <div className="project-preview-card">
            <img src="/api/placeholder/300/200" alt="E-commerce React" />
            <div className="preview-content">
              <h4>E-commerce React</h4>
              <p>Application complète avec panier et paiement</p>
              <div className="preview-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Stripe</span>
              </div>
            </div>
          </div>
          
          <div className="project-preview-card">
            <img src="/api/placeholder/300/200" alt="Dashboard Analytics" />
            <div className="preview-content">
              <h4>Dashboard Analytics</h4>
              <p>Interface de visualisation de données</p>
              <div className="preview-tech">
                <span>React</span>
                <span>Chart.js</span>
                <span>API</span>
              </div>
            </div>
          </div>
          
          <div className="project-preview-card">
            <img src="/api/placeholder/300/200" alt="API Blog" />
            <div className="preview-content">
              <h4>API RESTful Blog</h4>
              <p>Backend complet avec authentification</p>
              <div className="preview-tech">
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;