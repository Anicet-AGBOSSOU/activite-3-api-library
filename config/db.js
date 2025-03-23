const mongoose = require('mongoose');
require(`dotenv`).config();
// Connexion à la base de données MongoDB

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.error("Erreur de connexion à MongoDB", err));
}

module.exports = connectDB

