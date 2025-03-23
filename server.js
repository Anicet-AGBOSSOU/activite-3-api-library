const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const dotenv = require(`dotenv`);
const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// Port de l'API
const PORT = 7000; 

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`API en cours d'exécution sur le port ${PORT}`);
});


//Pour le message dans le naviguateur
app.get(`/`,(request,response)=>{
    response.send(`Salut les amis, Bienvenu sur l'API de Anicet`);
})