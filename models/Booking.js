const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
  roomAvailble: Boolean,
  bookingId:Number

},{timestamps: true
});
const Booking = mongoose.model("Booking", bookingSchema)

module.exports = {Booking}