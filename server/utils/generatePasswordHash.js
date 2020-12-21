const { generate, verify } = require('password-hash');
exports.verifyPassword = (password, hashedPassword) =>
    verify(password, hashedPassword);
exports.generatePasswordHash = (password) => generate(password);
