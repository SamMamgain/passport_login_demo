// modles
const { UserModel } = require('../models/users');

exports.login = async (opts, callback) => {
  if (!opts.email) return callback(`Requires "email" as an opts paramter`);
  if (!opts.password) return callback(`Requires "password" as an opts paramter`);

  const email = opts.email;
  const password = opts.password;

  try {

    let user = await UserModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {

        return callback(null, 'login successfull');
      } else {
        return callback(null, 'Wrong Email/Password');
      }
    } else {
      return callback(null, 'No user found.');
    }

  } catch (error) {
    console.log('error', error);
    return callback(error);
  }

}