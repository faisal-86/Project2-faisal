const mongoose = require('mongoose')

const RoomsSchema = mongoose.Schema({
    roomNum:Number
    , RoomType:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoomType"
    }

},{timestamps: true
});
const Rooms = mongoose.model("Rooms", RoomsSchema)

module.exports = {Rooms}