const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour créer un auteur (protégée par authentification)
router.post('/', authMiddleware, authorController.createAuthor); 

// Route pour lire tous les auteurs
router.get('/', authorController.getAllAuthors);

// Route pour lire un auteur par ID
router.get('/:id', authorController.getAuthorById);

// Route pour mettre à jour un auteur (protégée par authentification)
router.put('/:id', authMiddleware, authorController.updateAuthor);

// Route pour supprimer un auteur (protégée par authentification)
router.delete('/:id', authMiddleware, authorController.deleteAuthor);

module.exports = router;

