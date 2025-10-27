function isSignedIn(req, res, next) {
  if (req.session && req.session.user) {
    // user is signed in allow access
    return next();
  } else {
    // not signed in redirect to sign-in page
    res.redirect('/auth/sign-in');
  }
}

module.exports = isSignedIn;