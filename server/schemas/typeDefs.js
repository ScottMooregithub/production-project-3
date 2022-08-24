const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    getAllUsers: [User]
    getSingleSphericle: Sphericle
    getByCategory(category: String): [Sphericle]
  }
  type Sphericle {
    _id: ID
    text: String
    voteCount: Int
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    upvote(_id: ID!): Sphericle
    downvote(_id: ID!): Sphericle
  }
`;

module.exports = typeDefs;
