

exports.getCurrentUser = (opts, callback) => {
  const user = opts.user

  // delete password property
  delete user._doc.password;
  // send the current user details
  callback(null, user);
}