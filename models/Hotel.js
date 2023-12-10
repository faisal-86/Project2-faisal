const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    address:Number,
    hotelName: String,
    phoneNum: Number

},{timestamps: true
});
const Hotel = mongoose.model("Hotel", hotelSchema)

module.exports = {Hotel}