const Author = require("../models/authorModel");

exports.getAuthors = async (req, res) => {
  const authors = await Author.find().populate("books");
  res.json(authors);
};

// Créer un livre
exports.createAuthor = async (req, res) => {
  const { name, bio } = req.body;
  const author = new Author({ name, bio });
  await author.save();
  res.status(201).json(author);
};



// Lire tous les auteurs
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un auteur par ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un auteur
exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un auteur
exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
        res.json({ message: 'Auteur supprimé' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};