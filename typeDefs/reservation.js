const { gql }  = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        reservations: [Reservation!]
        reservationByName(guestName: String!): Reservation
        reservationById(_id: ID!): Reservation
    }
    
    input reservationInput {
        guestName: String!
        hotelName: String!
        arrivalDate: Date!
        departureDate: Date!
    }
    
    extend type Mutation {
        reservation(input: reservationInput!): Reservation
    }
    
    type Reservation {
        id: ID!
        guestName: String!
        hotelName: String!
        arrivalDate: Date!
        departureDate: Date!
        createdAt: Date!
        updatedAt: Date!
    }
`;
