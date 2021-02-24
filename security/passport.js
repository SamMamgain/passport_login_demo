const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

// models
const { UserModel } = require('../models/users');

module.exports = (app, passport) => {
  passport.use(new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'
  }, function (req, username, password, done) {
    UserModel.findOne({ email: username }, function (err, user) {
      if (err) { return done({ error: err }); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (req.body.password !== user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('user value', user);
      // delete password property
      delete user._doc.password;
      console.log('user value 2', user);
      return done(null, user);
    });
  }
  ));

  passport.serializeUser(function (user, done) {
    console.log('serial', user);
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    console.log('de-serial', id);

    UserModel.findById(id, function (err, user) {
      done(err, user);
    });
  });

  app.use(passport.initialize());

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).send('Logged out successfully');
  });
}
