const passport = require('passport');

// services
const loginService = require('../services/login-service');

module.exports = function (app) {
  app.post('/login', passport.authenticate('local'), loginService.login);
}