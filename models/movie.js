const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Movie', 'TV Show'], required: true },
  genre: [String],
  releaseYear: Number,
  watched: { type: Boolean, default: false },
  image: { type: String, default: '' }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;