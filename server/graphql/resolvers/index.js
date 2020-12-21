module.exports = {
    Query: {
        ...require('./UserResolvers/Query'),
        ...require('./ProfileResolver/Query')
    },
    Mutation: {
        ...require('./AuthResolvers/Mutation'),
        ...require('./ProfileResolver/Mutation')
    }
};
