const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');
const isSignedIn = require('../middleware/is-signed-in.js');

// INDEX - show all movies for the logged-in user
router.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/auth/sign-in');

  try {
    const filter = req.query.filter; // can be 'Movie', 'TV Show', or undefined

    const query = { user: req.session.user._id };
    if (filter === 'Movie' || filter === 'TV Show') {
      query.type = filter;
    }

    const movies = await Movie.find(query);

    res.render('movies/index', {
      movies,
      user: req.session.user,
      filter, // pass filter to EJS
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});
// NEW - show form to add a new movie
router.get('/new', isSignedIn, (req, res) => {
  res.render('movies/new', { user: req.session.user });
});

// CREATE - add a new movie to the database
router.post('/', isSignedIn, async (req, res) => {
  try {
    req.body.user = req.session.user._id;
    req.body.watched = req.body.watched === 'on';

    const existing = await Movie.findOne({
      title: req.body.title,
      user: req.body.user
    });

    if (existing) {
      return res.redirect('/movies'); // already in watchlist
    }

    await Movie.create(req.body);
    res.redirect('/movies');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


// EDIT - show form to edit a movie
router.get('/:id/edit', isSignedIn, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movies/edit', { movie, user: req.session.user });
  } catch (error) {
    console.log(error);
    res.redirect('/movies');
  }
});

// UPDATE - handle edit form submission
router.post('/:id', isSignedIn, async (req, res) => {
  try {
    req.body.watched = req.body.watched === 'on';
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/movies');
  } catch (error) {
    console.log(error);
    res.redirect('/movies');
  }
});

// DELETE - remove a movie
router.get('/:id/delete', isSignedIn, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
  } catch (error) {
    console.log(error);
    res.redirect('/movies');
  }
});

module.exports = router;
