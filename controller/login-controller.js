exports.login = async (opts, callback) => {
  if (!opts.user) return callback('Something Went Wrong');

  try {
    callback(null, opts.user);
  } catch (error) {
    callback(error)
  }


}