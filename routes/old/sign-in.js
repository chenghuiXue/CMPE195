/**
 * Sign In route that defines sign in logic.
 * @module sign-in
 */

 /* Dependencies */
var express = require('express');
var router = express.Router();
var passport = require('passport');

/* Routes */
router.get('/', function(req, res, next) {
  // res.render('sign-in/index', {error: req.flash('error')[0]});
  res.render('signin.pug', {error: req.flash('error')[0]});
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/sign-in',
  failureFlash: true
}));

/* Export Module */
module.exports = router;
