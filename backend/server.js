// ============================
// IMPORTATION DES MODULES EXPRESS et MIDDLEWARE CORS
// ============================

// Importation du module Express.
// Express est un framework minimaliste pour créer des applications web côté serveur avec Node.js.
import express from 'express';

// Importation du middleware 'cors'.
// CORS (Cross-Origin Resource Sharing) permet à des applications front-end (comme React)
// d'accéder aux ressources d'un serveur situé sur un domaine/port différent.
import cors from 'cors';





// ============================
// INITIALISATION DU SERVEUR
// ============================

// Création d'une instance de l'application Express.
// C'est à travers cette instance qu'on va configurer les routes, middlewares, etc.
const app = express();

// Définition du port sur lequel le serveur écoutera les requêtes HTTP.
// Port 3001 est utilisé ici pour éviter le conflit avec React (qui utilise souvent 3000).
const PORT = 3001;





// ============================
// MIDDLEWARES GLOBAUX
// ============================

// Active le middleware CORS pour toutes les routes de l'application.
// Cela permet à ton application front-end (ex: React) d'accéder au backend sans blocage.
app.use(cors());

// Active le middleware qui permet à Express de lire automatiquement
// les corps de requêtes en JSON (ex: les données envoyées via POST).
app.use(express.json());





// ============================
// DÉFINITION D'UNE ROUTE GET
// ============================

// On crée une route accessible via l'URL "/api/message" avec la méthode HTTP GET.
// req : représente la requête envoyée par le client
// res : représente la réponse qu'on envoie au client
app.get('/api/message', (req, res) => {
  // On envoie une réponse JSON contenant un message texte
  res.json({ message: 'Hello depuis le backend Express!' });
});





// ============================
// DÉMARRAGE DU SERVEUR
// ============================

// On démarre le serveur en lui disant d'écouter sur le port 3001.
// Une fois le serveur démarré, on affiche un message dans la console.
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});