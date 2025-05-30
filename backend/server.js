

// server.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer'; // Pour le formulaire de contact

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

// Route pour récupérer les articles de blog depuis JSONPlaceholder
app.get('/api/blog', async (req, res) => {
  // 👇 Logique métier : appel API externe et gestion de réponse
  /*
  console.log('🚀 Récupération des articles de blog...');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Erreur JSONPlaceholder: ${response.status}`);
    }
    const posts = await response.json();
    console.log(`✅ ${posts.length} articles récupérés avec succès`);
    res.json(posts);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des articles:', error.message);
    res.status(500).json({
      error: 'Impossible de récupérer les articles',
      details: error.message
    });
  }
  */
  res.json([]); // Réponse minimale temporaire
});

// Route pour les données du portfolio
app.get('/api/portfolio', (req, res) => {
  // 👇 Logique métier : données détaillées du portfolio
  /*
  const portfolioData = {
    developer: {
      name: "Alex Dupont",
      title: "Développeur Web Junior",
      email: "alex.dupont@email.com",
      location: "Montreal, QC",
      bio: "Développeur web passionné avec 2 ans d'expérience en apprentissage autodidacte. Spécialisé en React et Node.js."
    },
    skills: { ... },
    experience: [ ... ],
    stats: { ... }
  };
  res.json(portfolioData);
  */
  res.json({}); // Réponse minimale temporaire
});

// Route pour les projets
app.get('/api/projects', (req, res) => {
  // 👇 Logique métier : liste de projets
  /*
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      ...
    },
    ...
  ];
  res.json(projects);
  */
  res.json([]); // Réponse minimale temporaire
});

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  // 👇 Logique métier : validation et traitement d'un formulaire
  /*
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs requis doivent être remplis' });
  }

  try {
    console.log(`✅ Message de ${name} (${email}) reçu`);
    console.log(`Sujet: ${subject}`);
    console.log(`Message: ${message}`);
    res.json({ success: true, message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi du message:', error);
    res.status(500).json({
      error: 'Erreur lors de l\'envoi du message',
      details: error.message
    });
  }
  */
  res.json({ success: true }); // Réponse minimale temporaire
});

// Route de test
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

// Route par défaut
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
