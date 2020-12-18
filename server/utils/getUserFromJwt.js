const { verify } = require("jsonwebtoken");
module.exports = (jwt) => {
  const jwtData = verify(jwt, process.env.SECRET);
  return jwtData;
};
