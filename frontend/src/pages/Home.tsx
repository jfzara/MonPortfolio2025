import React, { useState, useEffect } from 'react'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('Tentative de connexion à /api/posts...')
      
      // Appel à votre API backend
      const response = await fetch('/api/posts')
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} - Vérifiez que le backend est démarré`)
      }
      
      const data = await response.json()
      console.log('Données reçues:', data.length, 'posts')
      
      // Limiter à 10 posts pour l'affichage
      setPosts(data.slice(0, 10))
    } catch (err) {
      console.error('Erreur lors de la récupération des posts:', err)
      setError(err instanceof Error ? err.message : 'Impossible de se connecter au backend')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container">
        <h1>Portfolio Clone 2025</h1>
        <div className="loading">Chargement des posts...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <h1>Portfolio Clone 2025</h1>
        <div className="error">
          <p>Erreur: {error}</p>
          <p>Backend URL: http://localhost:5000</p>
          <button onClick={fetchPosts} className="retry-btn">
            Réessayer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Portfolio Clone 2025</h1>
        <p>Page d'accueil avec données de JSONPlaceholder</p>
      </header>

      <main className="main">
        <section className="posts-section">
          <h2>Articles récents ({posts.length})</h2>
          
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <h3>#{post.id} - {post.title}</h3>
                <p>{post.body}</p>
                <small>Par utilisateur #{post.userId}</small>
              </article>
            ))}
          </div>
          
          <button onClick={fetchPosts} className="refresh-btn">
            Actualiser les données
          </button>
        </section>
      </main>
    </div>
  )
}

export default Home