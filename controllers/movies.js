const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');
const isSignedIn = require('../middleware/is-signed-in.js');

// INDEX - show all movies for the logged-in user, with type + watched filters
router.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/auth/sign-in');

  try {
    const type = req.query.type;     // 'Movie' or 'TV Show'
    const filter = req.query.filter; // 'Watched' or 'ToWatch'
    const query = { user: req.session.user._id };

    // 🎞 Filter by type
    if (type === 'Movie' || type === 'TV Show') {
      query.type = type;
    }

    // ✅ Filter by watched status
    if (filter === 'Watched') {
      query.watched = true;
    } else if (filter === 'ToWatch') {
      query.watched = false;
    }

    const movies = await Movie.find(query);

    res.render('movies/index', {
      movies,
      user: req.session.user,
      type,
      filter,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// NEW - form to add a new movie manually
router.get('/new', isSignedIn, (req, res) => {
  res.render('movies/new', { user: req.session.user });
});

// CREATE - add a movie (works for both form + AJAX)
router.post('/', isSignedIn, async (req, res) => {
  try {
    const data = req.body;
    data.user = req.session.user._id;

    // Fix watched value for checkbox or JSON
    if (typeof data.watched === 'string') {
      data.watched = data.watched === 'on';
    }

    // Prevent duplicate titles per user
    const exists = await Movie.findOne({
      title: data.title,
      user: data.user,
    });

    if (exists) {
      console.log('🎬 Already in watchlist:', data.title);
      if (req.headers['content-type']?.includes('application/json')) {
        return res.status(200).json({ message: 'Already in watchlist' });
      }
      return res.redirect('/movies');
    }

    await Movie.create(data);

    // 🟢 If it’s an AJAX (fetch) request → stay on page
    if (req.headers['content-type']?.includes('application/json')) {
      return res.status(200).json({ message: 'Added successfully' });
    }

    // 🟡 Otherwise → regular form submit
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    if (req.headers['content-type']?.includes('application/json')) {
      return res.status(500).json({ error: 'Failed to add movie' });
    }
    res.redirect('/');
  }
});

// EDIT FORM - Show the edit page for a movie
router.get('/:id/edit', isSignedIn, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.redirect('/movies');
    console.log("🎬 Editing movie:", movie);
    res.render('movies/edit', { movie });
  } catch (err) {
    console.error(err);
    res.redirect('/movies');
  }
});

// EDIT

router.post('/:id/edit', async (req, res) => {
  try {
    const data = req.body;

    // ✅ Fix watched checkbox
    if (typeof data.watched === 'string') {
      data.watched = data.watched === 'on';
    } else {
      data.watched = false; // unchecked boxes aren't sent at all
    }

    await Movie.findByIdAndUpdate(req.params.id, data, { new: true });
    res.redirect('/movies');
  } catch (err) {
    console.error(err);
    res.render('movies/edit', { movie: req.body, error: err.message });
  }
});

// DELETE
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
