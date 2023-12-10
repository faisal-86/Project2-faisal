const mongoose = require('mongoose')

const roomTypeSchema = mongoose.Schema({
 roomPrice:Number,
 description: String,
 roomName:String


},{timestamps: true
});
const RoomType = mongoose.model("RoomType", roomTypeSchema)

module.exports = {RoomType}