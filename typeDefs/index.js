const { gql }  = require('apollo-server-express');

const reservationTypeDefs = require('./reservation');

const typeDefs = gql`
    scalar Date 
    
    type Query {
        _: String
    }
    type Mutation {
      _: String
    }
    `;

module.exports = [
    typeDefs,
    reservationTypeDefs
]
