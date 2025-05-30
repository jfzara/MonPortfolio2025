// pages/Projects.js
import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Application e-commerce complète avec panier, authentification et paiement Stripe.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com/username/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app",
      status: "Terminé"
    },
    {
      id: 2,
      title: "API RESTful Blog",
      description: "API complète pour un blog avec authentification JWT, CRUD et upload d'images.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      category: "backend",
      github: "https://github.com/username/blog-api",
      demo: null,
      status: "Terminé"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Interface de visualisation de données avec graphiques interactifs et filtres avancés.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Chart.js", "TailwindCSS", "API"],
      category: "frontend",
      github: "https://github.com/username/analytics-dashboard",
      demo: "https://analytics-demo.netlify.app",
      status: "En cours"
    },
    {
      id: 4,
      title: "Application Mobile React Native",
      description: "App de gestion de tâches avec synchronisation cloud et notifications push.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "AsyncStorage"],
      category: "mobile",
      github: "https://github.com/username/todo-mobile",
      demo: null,
      status: "En cours"
    },
    {
      id: 5,
      title: "Portfolio Personnel",
      description: "Site portfolio responsive avec backend pour le blog et formulaire de contact.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Express", "CSS3"],
      category: "fullstack",
      github: "https://github.com/username/portfolio",
      demo: "https://alexdupont-dev.com",
      status: "Terminé"
    },
    {
      id: 6,
      title: "Extension Chrome",
      description: "Extension pour améliorer la productivité avec raccourcis clavier et notes rapides.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Chrome API", "HTML5", "CSS3"],
      category: "frontend",
      github: "https://github.com/username/productivity-extension",
      demo: null,
      status: "Terminé"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez mes réalisations et projets en développement</p>
      </div>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status === 'Terminé' ? 'completed' : 'in-progress'}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>Aucun projet trouvé pour cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;