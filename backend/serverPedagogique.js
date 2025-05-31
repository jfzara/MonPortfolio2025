// Importation des modules nécessaires

import express from 'express'; // Express est un framework minimaliste pour créer des serveurs web en Node.js
import cors from 'cors';       // CORS (Cross-Origin Resource Sharing) permet de gérer les autorisations d'accès entre domaines différents

// Création de l'application Express
const app = express();         // `app` devient notre application serveur que nous allons configurer

// Définition du port d'écoute du serveur
const PORT = 5000;             // Le serveur écoutera les requêtes entrantes sur le port 5000

// -----------------------------
// Middleware : CORS
// -----------------------------

// Middleware = fonction qui intercepte les requêtes HTTP avant qu'elles atteignent une route spécifique


app.use(cors({
  origin: 'http://localhost:5173', // Port utilisé par Vite
  credentials: true
}));

// -----------------------------
// Middleware : JSON parsing
// -----------------------------

// Ce middleware permet à Express d'analyser les corps de requêtes JSON (application/json)
app.use(express.json()); // Nécessaire pour accéder à `req.body` dans les requêtes POST ou PUT

// -----------------------------
// Middleware : Logging des requêtes
// -----------------------------

// Ce middleware affiche chaque requête HTTP dans la console avec la date, la méthode (GET, POST, etc.) et l'URL
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next(); // `next()` permet de passer à l'étape suivante (autre middleware ou route)
});



// -----------------------------
// Route : GET /api/blog
// -----------------------------

// Cette route répond à une requête GET sur /api/blog
app.get('/api/blog', (req, res) => {
  res.json([]); // On renvoie une réponse vide sous forme de tableau JSON
});

// -----------------------------
// Route : GET /api/portfolio
// -----------------------------

// Cette route répond à une requête GET sur /api/portfolio
app.get('/api/portfolio', (req, res) => {
  res.json({}); // On renvoie un objet JSON vide
});

// -----------------------------
// Route : GET /api/projects
// -----------------------------

// Cette route répond à une requête GET sur /api/projects
app.get('/api/projects', (req, res) => {
  res.json([]); // On renvoie un tableau JSON vide
});

// -----------------------------
// Route : POST /api/contact
// -----------------------------

// Cette route permet de traiter des formulaires de contact via une requête POST
app.post('/api/contact', (req, res) => {
  res.json({ success: true }); // Réponse minimale indiquant un succès (à compléter plus tard avec la logique d'envoi d'e-mail)
});

// -----------------------------
// Route : GET /api/test
// -----------------------------

// Route de test pour vérifier que le backend fonctionne
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Portfolio Backend connecté avec succès !',
    timestamp: new Date().toISOString(), // Date/heure actuelle sous format ISO
    endpoints: [                         // Liste des routes disponibles (à titre informatif)
      'GET /api/blog',
      'GET /api/portfolio',
      'GET /api/projects',
      'POST /api/contact'
    ]
  });
});

// -----------------------------
// Route : GET /
// -----------------------------

// Route par défaut (racine du site) qui fournit des informations générales sur l'API
app.get('/', (req, res) => {
  res.json({
    message: 'API Portfolio Alex Dupont - Développeur Junior',
    version: '1.0.0',
    endpoints: [ // On liste ici les routes que propose l’API, utile pour la documentation ou les tests manuels
      'GET /api/blog',
      'GET /api/portfolio',
      'GET /api/projects',
      'POST /api/contact',
      'GET /api/test'
    ]
  });
});

// -----------------------------
// Démarrage du serveur
// -----------------------------

// Le serveur est lancé et écoute sur le port défini
app.listen(PORT, () => {
  // Message affiché dans la console dès que le serveur est opérationnel
  console.log(`🚀 Portfolio Backend démarré sur http://localhost:${PORT}`);
});