const User = require('../models/User');
const generateJwt = require('../utils/generateJwt');
const {
    generatePasswordHash,
    verifyPassword
} = require('../utils/generatePasswordHash');
const { getUserByEmail } = require('./UserService')
exports.signUpUser = async (data) => {
    const checkUser = await getUserByEmail(data.email);
    if (checkUser) throw new Error("User already registered...")
    const user = await new User({
        ...data,
        password: generatePasswordHash(data.password)
    }).save();
    const token = generateJwt({ id: user._id });
    return {
        user,
        token
    };
};
exports.loginUser = async (data) => {
    const user = await getUserByEmail(data.email);
    if (!user) throw new Error('User not found');
    if (!verifyPassword(data.password, user.password))
        throw new Error('Invalid password');
    const token = generateJwt({ id: user._id });
    return {
        user,
        token
    };
};
