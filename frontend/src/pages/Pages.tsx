// pages/Blog.js
import { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('🔄 Récupération des articles de blog...');
        const response = await fetch('http://localhost:5000/api/posts');
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Articles récupérés:', data.length);
        // Limiter à 12 articles pour le portfolio
        setPosts(data.slice(0, 12));
      } catch (err) {
        console.error('❌ Erreur lors de la récupération:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="blog-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-container">
        <div className="error">
          <h2>❌ Erreur de connexion</h2>
          <p>{error}</p>
          <p>Vérifiez que votre serveur backend est démarré sur le port 5000</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Mon Blog Tech</h1>
        <p className="blog-subtitle">
          Mes réflexions et apprentissages en développement web
        </p>
      </div>
      
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-header">
              <h3 className="blog-title">{post.title}</h3>
              <span className="blog-date">
                {new Date().toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <p className="blog-excerpt">{post.body}</p>
            <div className="blog-footer">
              <span className="read-time">~3 min de lecture</span>
              <button className="read-more-btn">Lire la suite</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;