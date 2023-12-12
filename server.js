// server.js
// Require dependencies
const express = require('express');

//Multer dependencies
const multer = require('multer');


const expressLayout = require('express-ejs-layouts');
require('dotenv').config()

// connect to mongoDB
require('./config/db')

// initialize express app
const app = express();

// get the port number form .env file, if undefined, 3000
const port = process.env.PORT || 3000

app.use(express.static('public'));




// const upload = multer({ storage: storage });




//  Middlewares
// Templating Engine
app.set('view engine', 'ejs');
app.use(expressLayout);




// to encode req.body - make form data readable in controllers
app.use(express.urlencoded({ extended: true }));

// link you static folder i.e. images, css 
// app.use(express.static('public'));
//-------------------------//




//------- Mount routes -------//
// Your code goes here
const hotelRouter = require("./routes/hotel");
const roomTypeRouter = require("./routes/roomType")//(upload);
const userRouter = require("./routes/user")
const roomsRouter = require("./routes/rooms")
const bookingRouter = require("./routes/booking")




app.use("/hotel", hotelRouter);
app.use("/roomType", roomTypeRouter);
app.use("/user", userRouter);
app.use("/rooms", roomsRouter);
app.use("/booking", bookingRouter);
//-------------------------//




// start listening to requests coming from the PORT
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))


  
 


  



