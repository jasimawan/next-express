const User = require('../models/User');

exports.getAllUsers = async () => {
    return await User.find();
};
exports.getUserById = async (id) => await User.findById(id);
