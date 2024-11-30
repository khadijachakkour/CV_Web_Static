// Importer le module Express
const express = require('express');
const path = require('path');

// Créer une application Express
const app = express();

// Définir le port
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (HTML, CSS, JS) dans un dossier public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route principale : renvoyer la page index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exemple de route simple pour une API
app.get('/api/bonjour', (req, res) => {
  res.json({ message: 'Bonjour depuis le backend Node.js!' });
});


// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur http://localhost:${PORT}`);
});
