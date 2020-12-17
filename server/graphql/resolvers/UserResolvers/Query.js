const { getAllUsers, getUserById } = require('../../../services/UserService');

exports.users = async () => await getAllUsers();
exports.user = async (parent, args, ctx) => getUserById(args.id);
