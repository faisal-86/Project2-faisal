const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
  roomAvailble: Boolean,
  price:Number,
  roomNum:Number,
  bookingId:Number

},{timestamps: true
});
const Booking = mongoose.model("Booking", bookingSchema)

module.exports = {Booking}