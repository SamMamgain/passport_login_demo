// constrollers
const loginController = require('../controller/login-controller');

exports.login = (req, res) => {

  // send logged-in user details
  res.status(200).send(req.user);

}