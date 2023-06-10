const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!,
        authors: String!,
        description: String!,
        bookId: String!,
        image: String,
        link: String,
        title: String!
    }

    type User {
        _id: ID!,
        username: String!,
        email: String!,
        password: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(email: String!): User
        me: User
    }

    type Mutation {
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(_id: String!, title: String!) : savedBOoks
    }

`;

module.exports = typeDefs;