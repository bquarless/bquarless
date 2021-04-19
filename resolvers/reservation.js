
const Reservation = require('../database/models/reservation');

module.exports = {
    Query: {
        reservationById: (_, input) => Reservation.findById({_id: input._id}),
        reservations:() => Reservation.find()
    },
    Mutation: {
        reservation: async (_, { input }) => {
            try {
                const newReservation = new Reservation({...input});
                const result = await newReservation.save();
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    }
}
