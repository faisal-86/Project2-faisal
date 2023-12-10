const mongoose = require('mongoose')

const roomTypeSchema = mongoose.Schema({
 roomSize:String,
 roomPrice:Number

},{timestamps: true
});
const roomType = mongoose.model("roomType", roomTypeSchema)

module.exports = {roomType}