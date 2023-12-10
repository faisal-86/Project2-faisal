const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
   hotelId:Number,
   price: Number

},{timestamps: true
});
const Payment = mongoose.model("Payment", paymentSchema)

module.exports = {Payment}