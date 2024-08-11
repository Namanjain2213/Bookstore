const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google Authentication Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('https://bookbank-nine-lime.vercel.app/dashboard'); // Redirect to your frontend
  }
);

module.exports = router;
