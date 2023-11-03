const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); 
const port = 4000;

// Middleware pour traiter les données JSON des requêtes POST
app.use(bodyParser.json());

app.use(cors());


// Variable pour stocker les informations obtenues dans /login
const loginData = [];

// Endpoint pour gérer les requêtes POST /login
app.post('/login', (req, res) => {
  // Récupérez les données du corps de la requête
  const { cliId, username, password } = req.body;

  // Vérifiez si clientId, username et password sont non nuls
  if (cliId && username && password) {
    // Enregistrez les données dans la variable loginData si nécessaire
    loginData.push({ cliId, username, password });
    res.status(200).json({ message: 'Authentification réussie' });
  } else {
    res.status(401).json({ message: 'Authentification échouée' });
  }
});



// Endpoint pour gérer les requêtes PATCH /ping
app.patch('/ping', (req, res) => {
  // Récupérez le cliId de la requête
  const cliId = req.query.cliId;

  res.status(200).json({ message: 'Ping réussi', cliId });
});

// Endpoint pour gérer les requêtes GET /
app.get('/', (req, res) => {

  res.json({ message: 'Données de l\'application Express.js', loginData });
});

// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
