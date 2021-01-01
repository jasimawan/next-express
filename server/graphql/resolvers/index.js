module.exports = {
    Query: {
        ...require('./AuthResolvers/Query'),
        ...require('./UserResolvers/Query'),
        ...require('./ProfileResolver/Query')
    },
    Mutation: {
        ...require('./AuthResolvers/Mutation'),
        ...require('./ProfileResolver/Mutation')
    }
};
