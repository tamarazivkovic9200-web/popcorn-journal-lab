const express = require('express');
const path = require('path');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const session = require ('express-session');
require ('dotenv').config ();
const app =express();
const passUserToView = require('./middleware/passUserToView.js');
const Movie = require('./models/movie.js');



// middelware

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});
 app.use(
  session({
    secret: process.env.SESSION_SECRET || 'popcornsecret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passUserToView);


// controllers

const authController = require('./controllers/auth.js');
const moviesController = require('./controllers/movies.js');


// routes
app.use('/auth', authController);
app.use('/movies', moviesController);


// home

app.get('/', async (req, res) => {
  try {
    // get everything from DB
    const all = await Movie.find();

    // split into 2 arrays
    const movies = all.filter(item => item.type === 'Movie');
    const shows = all.filter(item => item.type === 'TV Show');

    res.render('homeMovie.ejs', {
      user: req.session.user,
      movies,
      shows,
    });
  } catch (err) {
    console.log(err);
    res.render('homeMovie.ejs', {
      user: req.session.user,
      movies: [],
      shows: [],
    });
  }
});

// movie page

app.get('/movies', async (req, res) => {
  const movies = await Movie.find ({type: 'Movie'});
  res.render ('movies/moviesList', {movies, user: req.session.user});
});

// tv show page

app.get('/shows', async (req, res) => {
  const show = await Movie.find ({type: 'TV Show'});
  res.render ('show/showsList', {shows, user: req.session.user});
});

app.listen(3000, () => console.log('Server running on port 3000'));