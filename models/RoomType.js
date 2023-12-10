const mongoose = require('mongoose')

const roomTypeSchema = mongoose.Schema({
 roomSize:String,
 roomPrice:Number

},{timestamps: true
});
const RoomType = mongoose.model("RoomType", roomTypeSchema)

module.exports = {RoomType}