const User = require('../models/User');
const generateJwt = require('../utils/generateJwt');
const {
  generatePasswordHash,
  verifyPassword,
} = require('../utils/generatePasswordHash');

exports.signUpUser = async (data) => {
  const user = await new User({
    ...data,
    password: generatePasswordHash(data.password),
  }).save();
  const token = generateJwt({ _id: user._id });
  return {
    user,
    token,
  };
};
exports.loginUser = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error('User not found');
  if (!verifyPassword(data.password, user.password))
    throw new Error('Invalid password');
  const token = generateJwt({ _id: user._id });
  return {
    user,
    token,
  };
};
