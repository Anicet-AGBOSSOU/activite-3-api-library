const mongoose = require("mongoose");

//Modèle auteur avec une relations aux livres
const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book", require: true }],
},
{timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);

