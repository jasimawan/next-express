const passwordHash = require('password-hash');
module.exports = (password) => passwordHash.generate(password);
