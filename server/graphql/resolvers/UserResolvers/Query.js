const { getAllUsers, getUserById } = require('../../../services/UserService');

exports.users = async () => await getAllUsers();
exports.user = async (parent, args, ctx) => {
    if (!ctx._id) throw new Error('You are not authorized. Please login');
    return getUserById(args.id);
};
