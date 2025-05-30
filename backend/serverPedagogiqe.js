// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Configuration CORS
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes API minimales
app.get('/api/blog', (req, res) => {
  res.json([]); // Réponse vide temporaire
});

app.get('/api/portfolio', (req, res) => {
  res.json({}); // Réponse vide temporaire
});

app.get('/api/projects', (req, res) => {
  res.json([]); // Réponse vide temporaire
});

app.post('/api/contact', (req, res) => {
  res.json({ success: true }); // Réponse minimale
});

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Portfolio Backend connecté avec succès !',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/blog',
      'GET /api/portfolio',
      'GET /api/projects',
      'POST /api/contact'
    ]
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'API Portfolio Alex Dupont - Développeur Junior',
    version: '1.0.0',
    endpoints: [
      'GET /api/blog',
      'GET /api/portfolio',
      'GET /api/projects',
      'POST /api/contact',
      'GET /api/test'
    ]
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend démarré sur http://localhost:${PORT}`);
});