const { gql } = require('apollo-server'); // gql is a variable this allows us to write a pure GraphQL code, automatically translates the code so that JS understands

//installed Apollo GraphQL extension
//every graphql scheme will start with one specific type, thats called query
// we wrap [] around to get a list of such field
//accordingly we need to have a resolver for the Query, here for the users field
//Here Nationality is an enum (its a best practice to have enum in capital letters)
const typeDefs = gql`
    type User{
        id:ID!
        name: String!
        username: String!
        age: Int!
        nationality:Nationality!
        friends:[User]
    }
    type Query{
        users: [User!]!
    }

    enum Nationality{
        CANADA
        BRAZILINDIA
        GERMANY
        CHILE
    }
`;

module.exports = { typeDefs }