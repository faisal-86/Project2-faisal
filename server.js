// server.js
// Require dependencies
const express = require('express');
const session = require("express-session");
const passport = require("passport")



const expressLayout = require('express-ejs-layouts');
require('dotenv').config()

// connect to mongoDB
require('./config/db')


// // Import imageConfig
// const imageConfig = require('./config/imageConfig');
// const upload = imageConfig.upload; // Extract the upload middleware

// initialize express app
const app = express();

// get the port number form .env file, if undefined, 3000
const port = process.env.PORT || 3000



//  Middlewares
// Templating Engine
app.set('view engine', 'ejs');
app.use(expressLayout);




// to encode req.body - make form data readable in controllers
app.use(express.urlencoded({ extended: true }));



// app.use(upload.array('images')); // Multer middleware

// link you static folder i.e. images, css rs

//  app.use('/uploads', express.static('public/uploads'));
app.use(express.static('public'))
//-------------------------//

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')

app.use(function(req,res,next){
  res.locals.user = req.user;
  next();
})




//------- Mount routes -------//
// Your code goes here
const indexRouter = require("./routes/index");
const hotelRouter = require("./routes/hotel");
const roomTypeRouter = require("./routes/roomType") //(upload);
const userRouter = require("./routes/user")
const roomsRouter = require("./routes/rooms")
const bookingRouter = require("./routes/booking")



app.use('/',indexRouter)
app.use("/hotel", hotelRouter);
app.use("/roomType", roomTypeRouter);
app.use("/user", userRouter);
app.use("/rooms", roomsRouter);
app.use("/booking", bookingRouter);
//-------------------------//




// start listening to requests coming from the PORT
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))


  
 


  



