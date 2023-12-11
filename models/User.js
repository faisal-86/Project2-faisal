const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
 name: String,
 phoneNum: Number,
 emailAddress: String,
//  googleId: {
//     type: String,
//     required: true
// },
avatar: String,

},{timestamps: true
});


const User = mongoose.model("User", userSchema);


module.exports = {User};