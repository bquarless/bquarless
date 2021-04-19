const { GraphQLDateTime } = require('graphql-iso-date');

const reservationResolver = require('./reservation');

const customDateScalarResolver = {
    Date: GraphQLDateTime
}

module.exports = [
    reservationResolver,
    customDateScalarResolver
]
