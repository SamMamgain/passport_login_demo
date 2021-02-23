
module.exports = function (app) {
  app.get('/getCurrentUser', function (req, res, next) {
    if(req.user) {
      res.status(200).send(req.user);

    } else {
      res.status(200).send('Session expired.... Login again!!!');
    }
  });
}