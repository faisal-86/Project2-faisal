const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
 hotleName: String,
 phoneNum: Number,


},{timestamps: true
});
const Hotel = mongoose.model("User", userSchema)

module.exports = {User}