// controllers
const UserController = require('../controller/user-controller');

exports.getCurrentUser = (req, res) => {
  const opts = {
    user: req.user
  }
  UserController.getCurrentUser(opts, (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(200).send(result);
  });
}