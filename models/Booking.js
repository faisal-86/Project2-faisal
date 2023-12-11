const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
  checkIn:Date,
  checkOut:Date,
  RoomType:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType"
}

},{timestamps: true
});
const Booking = mongoose.model("Booking", bookingSchema)

module.exports = {Booking}