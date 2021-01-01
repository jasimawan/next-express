const { gql } = require('apollo-server');

module.exports = gql`
    type User {
        id: ID
        username: String!
        email: String!
        password: String!
        profile: Profile
    }
    type Profile {
        id: ID
        address: String!
        phoneNumber: String!
        gender: String!
        country: String!
        user: User!
    }
    type AuthToken {
        token: String!
        user: User!
    }
    input CreateProfileInput {
        address: String
        phoneNumber: String
        gender: String
        country: String
    }
    type Query {
        users: [User!]
        user(id: ID!): User
        profile(id: ID!): Profile
        verifyToken(token: String!): User
    }
    type Mutation {
        signUp(email: String!, password: String!, username: String!): AuthToken!
        login(email: String!, password: String!): AuthToken!
        createProfile(input: CreateProfileInput): Profile!
    }
`;
