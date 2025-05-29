import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3003

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

app.use(express.json())

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  next()
})

// Routes API
app.get('/api/posts', async (req, res) => {
  console.log('🚀 Récupération des posts depuis JSONPlaceholder...')
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    if (!response.ok) {
      throw new Error(`Erreur JSONPlaceholder: ${response.status}`)
    }
    
    const posts = await response.json()
    console.log(`✅ ${posts.length} posts récupérés`)
    
    res.json(posts)
  } catch (error) {
    console.error('❌ Erreur:', error.message)
    res.status(500).json({ 
      error: 'Impossible de récupérer les posts',
      details: error.message 
    })
  }
})

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend connecté !' })
})

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`)
  console.log(`📋 Routes disponibles:`)
  console.log(`   GET /api/posts - Récupère les posts`)
  console.log(`   GET /api/test  - Test de connexion`)
})