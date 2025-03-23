const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour créer un livre (protégée par authentification)
router.post('/books', authMiddleware, bookController.createBook); 

// Route pour lire tous les livres
router.get('/', bookController.getAllBooks);

// Route pour lire un livre par ID
router.get('/:id', bookController.getBookById);

// Route pour mettre à jour un livre (protégée par authentification)
router.put('/:id', authMiddleware, bookController.updateBook);

// Route pour supprimer un livre (protégée par authentification)
router.delete('/:id', authMiddleware, bookController.deleteBook);

module.exports = router;

