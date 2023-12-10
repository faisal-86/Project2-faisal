const {Hotel} = require("../models/Hotel");

//API's / Functions
//Create Operation
exports.hotel_create_get = (req,res) =>{
    res.render("hotel/add");
}
exports.hotel_create_post = (req,res) =>{
    console.log(req.body);
    let hotel = new Hotel(req.body);
    hotel.save()
    .then(() => {
        res.redirect("/hotel/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.");
    })
}
//Show Operation
exports.hotel_index_get = (req,res) => {
    Hotel.find()
    .then((hotels) =>{
        res.render("hotel/index", {hotels});
    })
    .catch((err) => {
        console.log(err);
    })
}
exports.hotel_show_get = (req,res) => {
    console.log(req.query.id);
    Hotel.findById(req.query.id)
    .then((hotel) =>{
        res.render("hotel/detail", {hotel});
    })
    .catch((err) => {
        console.log(err);
    })
}
//Delete Operation
exports.hotel_delete_get = (req,res) => {
    console.log(req.query.id);
    Hotel.findByIdAndDelete(req.query.id)
    .then(() =>{
        res.redirect("/hotel/index");
    })
    .catch((err) => {
        console.log(err);
    })
}
//Update Operation
exports.hotel_edit_get = (req,res) => { 
    Hotel.findById(req.query.id)
    .then((hotel) =>{
        res.render("hotel/edit", {hotel});
    })
    .catch((err) => {
        console.log(err);
    })
}
exports.hotel_update_post = (req,res) => { 
    console.log(req.body.id);
    Hotel.findByIdAndUpdate(req.body.id, req.body)
    .then(() =>{
        res.redirect("/hotel/index");
    })
    .catch((err) => {
        console.log(err);
    })
}