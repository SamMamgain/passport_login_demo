// controllers
const loginController = require('../controller/login-controller');

exports.login = (req, res) => {

  const opts = {
    user: req.user
  }

  loginController.login(opts, (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(200).send(result);
  });

}