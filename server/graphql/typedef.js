const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  type AuthToken {
    token: String!
    user: User!
  }
  type Query {
    users: [User!]
    user(id: ID!): User
  }
  type Mutation {
    signUp(email: String!, password: String!, username: String!): AuthToken!
    login(email: String!, password: String!): AuthToken!
  }
`;
