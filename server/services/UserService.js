const User = require('../models/User');

exports.getAllUsers = async () => {
    return await User.find();
};
exports.getUserById = async (id) => await User.findById(id);

exports.getUserByEmail = async (email) => {
    const reg = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!reg.test(email)) throw new Error('Email is not valid');
    return await User.findOne({ email });
};
