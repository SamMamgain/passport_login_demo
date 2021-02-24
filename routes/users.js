// security
const authenticate = require('../security/authenticate');

// services
const UserService = require('../services/user-service');

module.exports = function (app) {
  app.get('/getCurrentUser', authenticate, UserService.getCurrentUser);
}