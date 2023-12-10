const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    address:String,
    hotelName: String,
    phoneNum: String

},{timestamps: true
});
const Hotel = mongoose.model("Hotel", hotelSchema)

module.exports = {Hotel}