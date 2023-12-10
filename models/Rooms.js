const mongoose = require('mongoose')

const RoomsSchema = mongoose.Schema({
    roomId: Number,
    roomNum:Number

},{timestamps: true
});
const Rooms = mongoose.model("Rooms", RoomsSchema)

module.exports = {Rooms}