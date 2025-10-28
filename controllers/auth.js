const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

// ===== GET ROUTES =====
router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in', { error: null, success: null });
});

router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up', { error: null, success: null });
});

router.get('/sign-out', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// ===== SIGN UP =====
router.post('/sign-up', async (req, res) => {
  const { username, password, confirm } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('auth/sign-up', {
        error: '⚠️ Username already taken',
        success: null,
      });
    }

    if (password !== confirm) {
      return res.render('auth/sign-up', {
        error: '❌ Passwords do not match',
        success: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    return res.render('auth/sign-in', {
      success: '✅ Account created successfully! Please sign in.',
      error: null,
    });
  } catch (err) {
    console.error(err);
    res.render('auth/sign-up', {
      error: 'Something went wrong. Please try again.',
      success: null,
    });
  }
});

// ===== SIGN IN =====
router.post('/sign-in', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.render('auth/sign-in', {
        error: '❌ Username not found',
        success: null,
      });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return res.render('auth/sign-in', {
        error: '🔒 Incorrect password',
        success: null,
      });
    }

    req.session.user = user;
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('auth/sign-in', {
      error: 'Something went wrong. Please try again.',
      success: null,
    });
  }
});

module.exports = router;