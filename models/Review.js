const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  title:String,
  content: String

},{timestamps: true
});
const Review = mongoose.model("Review", reviewSchema)

module.exports = {Review}