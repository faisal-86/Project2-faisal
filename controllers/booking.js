const {Booking} = require("../models/Booking");
const {RoomType} = require('../models/RoomType');

 exports.booking_index_get = (req,res)=>{
      Booking.find().populate('RoomType')
      .then((bookings)=>{
          res.render("booking/index",{bookings})
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

    // Save the booking and then perform additional operations
    bookings.save()
      .then(() => {
        // Find the RoomType
        return RoomType.findById(req.body.RoomType);
      })
      .then((roomType) => {
        if (!roomType) {
          throw new Error('RoomType not found');
        }
    
        console.log(bookings);
    
        // Check if roomType.bookings is an array or initialize it as an empty array
        roomType.bookings = Array.isArray(roomType.bookings) ? roomType.bookings : [];
    
        // Push the bookings to the roomType's bookings array
        roomType.bookings.push(bookings);
    
        // Save the modified roomType
        return roomType.save();
      })
      .then(() => {res.redirect("/booking/index");
        // Additional code after the roomType has been saved
      })
      .catch((error) => {
        console.error(error);
        // Handle errors here
      });
    
    }
  /*
  
  
 
  
  exports.booking_show_get = (req,res)=>{
      console.log(req.query.id);
      Booking.findById(req.query.id).populate('RoomType')
      .then((bookings)=>{
          console.log(bookings)
          res.render("booking/detail", {bookings}) 
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
      Bookings.findByIdAndUpdate(req.body.id, req.body).populate()
      .then(()=>{
          res.redirect('/booking/index');
      })
      .catch((err)=>{
          console.log(err);
      })
  }
  */