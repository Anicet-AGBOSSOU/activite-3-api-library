const mongoose = require("mongoose");

//Modèle livre avec une relation à l'auteur
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  publishedYear: { type: Number }},
  {timestamps: true});

module.exports = mongoose.model("Book", BookSchema);

