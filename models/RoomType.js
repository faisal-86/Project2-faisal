const mongoose = require('mongoose')

const roomTypeSchema = mongoose.Schema({
 roomPrice:Number,
 description: String,
 type:String,
 rooms:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rooms"
}]


},{timestamps: true
});
const RoomType = mongoose.model("RoomType", roomTypeSchema)

module.exports = {RoomType}