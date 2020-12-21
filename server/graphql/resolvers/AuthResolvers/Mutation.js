const { signUpUser, loginUser } = require('../../../services/AuthService');

exports.signUp = async (parent, args) => {
    const res = await signUpUser(args);
    return res;
};
exports.login = async (parent, args) => {
    return await loginUser(args);
};
