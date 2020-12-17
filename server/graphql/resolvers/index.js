module.exports = {
  Query: {
    ...require('./UserResolvers/Query'),
  },
  Mutation: {
    ...require('./AuthResolvers/Mutation'),
  },
};
