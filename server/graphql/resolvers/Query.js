const { getAllUsers } = require('../../services/UserService');

exports.users = async () => await getAllUsers();
