const { validateToken } = require('../../../services/AuthService');

exports.verifyToken = async (parent, args) => {
    const { token } = args;
    return await validateToken(token);
};
