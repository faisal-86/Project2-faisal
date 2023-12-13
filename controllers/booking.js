const {Booking} = require("../models/Booking");
const {RoomType} = require('../models/RoomType');
const {Rooms} = require("../models/Rooms");
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

exports.booking_check_create_get = (req,res)=>{
    res.render("booking/check")
}
exports.booking_check_create_post = (req,res)=>{
   
    console.log("Create GEt")

    Rooms.find().populate('RoomType')
  .then((room) => {
      console.log(room);

      let typesCount = {};
      // Count how many rooms of each type there are
        for(let i=0;i<room.length;i++){
            // Count the number of rooms        
            let roomTypeKey = room[i].RoomType.type;

            // If the room has already been seen, add to the count, else create the new room type
            if(typesCount.hasOwnProperty(roomTypeKey)){
                typesCount[roomTypeKey] += 1;
            }else{
                typesCount[roomTypeKey] = 1;
            }
        }
        console.log("Rooms in the Building",typesCount);

        // Temporary hardcoded variables
        const requestedCheckin = new Date(req.body.checkIn);
        const requestedCheckOut = new Date(req.body.checkOut);

        // Get tbe bookings that overlap with the desired dates
        Booking.find({
            $or:[
                {$and:[
                    {checkOut: {$gte: requestedCheckin}},
                    {checkIn: {$lte: requestedCheckin}}
                ]},
                {$and:[
                    {checkIn: {$lte: requestedCheckOut}},
                    {checkIn: {$gte: requestedCheckin}}
                ]}
            ]
        }).populate("RoomType").then((bookings) =>{

            // Go through each booking
            for(let b=0; b<bookings.length;b++){

                // If the room type is in the room availability list
                if(typesCount.hasOwnProperty(bookings[b].RoomType.type)){
                    // Subtract 1
                    typesCount[bookings[b].RoomType.type]--;

                    // If the number of rooms available is <1, delete it
                    if(typesCount[bookings[b].RoomType.type] <1){
                        delete typesCount[bookings[b].RoomType.type];
                    }
                }
                  
            }



            console.log("Rooms Available",typesCount);

            const typesCountArray = Object.keys(typesCount)

            console.log("Rooms Available Array",typesCountArray);


            //res.render("booking/add", {roomTypes: room, typesCountArray});

            RoomType.find({
                type: {$in: typesCountArray}
            })
            .then((roomTypes) => {
                console.log(roomTypes);
                res.render("booking/add", {roomTypes, requestedCheckin, requestedCheckOut});
            })
            .catch((err) => {
                console.log(err);
            })   
            
             });
            
            
              })
              .catch((err) => {
                  console.log(err);
              })   
              }
           
              

exports.booking_create_get = (req,res)=>{
    res.render("booking/add")

}

  exports.booking_create_post = (req,res)=>{
    console.log(req.body)
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
      .catch((err) => {
        console.log(err);
      });
    
    }

  
  exports.booking_show_get = (req,res)=>{
      console.log(req.query.id);
      Booking.findById(req.query.id).populate({
        path:'RoomType',
        populate: {
            path: 'rooms'
        }
    })
      .then((bookings)=>{
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
