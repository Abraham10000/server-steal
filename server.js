const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const loginData = [];

app.post('/login', (req, res) => {
  const { cliId, username, password } = req.body;

  loginData.push({ cliId, username, password });

  if (username && password) {
    res.status(200).json({ message: 'Authentification réussie' });
  } else {
    res.status(401).json({ message: 'Authentification échouée' });
  }
});

app.patch('/ping', (req, res) => {
  const cliId = req.query.cliId;

  res.status(200).json({ message: 'Ping réussi', cliId });
});

app.get('/', (req, res) => {
 
  res.json({ message: 'Données de l\'application Express.js', loginData });
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});

module.exports = app