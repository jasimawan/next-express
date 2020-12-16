const User = require('../models/User');
const generateJwt = require('../utils/generateJwt');
const generatePasswordHash = require('../utils/generatePasswordHash');

exports.signUp = async (data) => {
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
