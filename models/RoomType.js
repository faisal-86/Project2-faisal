const mongoose = require('mongoose')

const roomTypeSchema = mongoose.Schema({
 roomPrice:Number,
 description: String,
 type:String,
 images: [String],
 rooms:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rooms"
}],
Booking:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
}


},{timestamps: true
});
const RoomType = mongoose.model("RoomType", roomTypeSchema)

module.exports = {RoomType}