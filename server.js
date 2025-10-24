const express = require('express');
const path = require('path');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const session = require ('express-session');
require ('dotenv').config ();
const app =express();


// middelware

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
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

const authController = require('./controllers/auth.js');
app.use('/auth', authController);



app.get('/', (req,res)=> {
    res.render('home', {user: req.session.user});
});


app.listen(3000, () => console.log('Server running on port 3000'));