const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

//Créer un livre
exports.createBook = async (req, res) => {
    try{
  const { title, author, publishedYear } = req.body;
  const newBook = new Book({ title, author, publishedYear });
  await newBook.save();
  await Author.findByIdAndUpdate(author,{ $push:
    {books:newBook._id} });
  res.status(201).json(newBook);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};
// Lire tous les livres (public)
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name');
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un livre par ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author', 'name');
        if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer un livre spécifique (public)
exports.getBookById = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id).populate(`author`, `name bio`);
        if (!book) return res.status(404).json({ message:`Livre non trouvé`});
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un livre 
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
        res.json({ message: 'Livre supprimé' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};