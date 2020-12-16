const { signUp } = require('../../services/AuthService');

exports.signUp = async (parent, args) => {
  const res = await signUp(args);
  return res;
};
