// server.js
import express from 'express';
import cors from 'cors'; // Ajout de CORS

const app = express();
const PORT = 5000;

// Configuration CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5177'], // Ajout des ports frontend
  credentials: true
}));

app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Route pour récupérer les posts depuis JSONPlaceholder
app.get('/api/posts', async (req, res) => {
  console.log('🚀 Récupération des posts depuis JSONPlaceholder...');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`Erreur JSONPlaceholder: ${response.status}`);
    }

    const posts = await response.json();
    console.log(`✅ ${posts.length} posts récupérés avec succès`);

    res.json(posts);

  } catch (error) {
    console.error('❌ Erreur lors de la récupération des posts:', error.message);
    res.status(500).json({
      error: 'Impossible de récupérer les posts',
      details: error.message
    });
  }
});

// Route de test pour vérifier la connexion
app.get('/api/test', (req, res) => {
  console.log('Route de test appelée');
  res.json({
    message: 'Backend connecté avec succès !',
    timestamp: new Date().toISOString()
  });
});

// Route par défaut
app.get('/', (req, res) => {
  res.json({
    message: 'API Backend Portfolio Clone 2025',
    endpoints: [
      'GET /api/posts - Récupère les posts de JSONPlaceholder',
      'GET /api/test - Test de connexion'
    ]
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`📋 Routes disponibles:`);
  console.log(`   GET http://localhost:${PORT}/api/posts`);
  console.log(`   GET http://localhost:${PORT}/api/test`);
  console.log(`   GET http://localhost:${PORT}/`);
});