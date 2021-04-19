const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    guestName: {
        type: String,
        require: true
    },
    hotelName: {
        type: String,
        require: true
    },
    arrivalDate: {
        type: Date,
        require: true
    },
    departureDate: {
        type: Date,
        require: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Reservation', reservationSchema);
