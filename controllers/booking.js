const {Booking} = require("../models/Booking");
const {RoomType} = require('../models/RoomType');
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

 exports.booking_index_get = (req,res)=>{
      Booking.find().populate('RoomType')
      .then((bookings)=>{
          res.render("booking/index",{bookings, dayjs})
      })
      .catch((err)=>{
          console.log(err)
          res.send('Please Try Again !')
      })
  
  }

exports.booking_create_get = (req,res)=>{
      RoomType.find()
  .then((roomTypes) => {
      console.log(roomTypes);
      res.render("booking/add", {roomTypes});
  })
  .catch((err) => {
      console.log(err);
  })   
  }

  exports.booking_create_post = (req,res)=>{
    let bookings = new Booking(req.body);
    bookings.save()
      .then(() => {
        return RoomType.findById(req.body.RoomType);
      })
      .then((roomType) => {
        if (!roomType) {
          res.send('Please Try Again !')
        }
        console.log(bookings);
        // Check if roomType.bookings is array or make it an empty array
        roomType.bookings = Array.isArray(roomType.bookings) ? roomType.bookings : [];
        roomType.bookings.push(bookings);    
        // return roomType.save();
      })
      .then(() => {
        res.redirect("/booking/index");
      })
      .catch((error) => {
        console.error(error);
      });
    
    }

  
  exports.booking_show_get = (req,res)=>{
      console.log(req.query.id);
      Booking.findById(req.query.id).populate('RoomType')
      .then((bookings)=>{
          console.log(bookings)
          res.render("booking/detail", {bookings, dayjs}) 
      })
      .catch(err=>{
          console.log(err)
      })
  }  
exports.booking_delete_get = (req, res) =>{
      console.log(req.query.id);
      Booking.findByIdAndDelete(req.query.id)
      .then(() =>{
          res.redirect("/booking/index");
      })
      .catch((err) =>{
          console.log(err);
      })
  } 
  exports.booking_edit_get = (req,res)=>{
      console.log(req.query.id);
      RoomType.find().then(
          roomTypes => {
              Booking.findById(req.query.id).populate('RoomType')
              .then((bookings)=>{
                  res.render('booking/edit',{bookings, roomTypes});
              })
              .catch((err)=>{
                  console.log(err);
              })
  
  
  
          }
      )
      
      .catch((err)=>{
          console.log(err);
      })
  }
  
  exports.booking_update_post = (req,res)=>{
      console.log(req.body.id);
      Booking.findByIdAndUpdate(req.body.id, req.body).populate()
      .then(()=>{
          res.redirect('/booking/index');
      })
      .catch((err)=>{
          console.log(err);
      })
  }
