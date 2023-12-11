// server.js
// Require dependencies
const express = require('express');

//Multer dependencies
const multer = require('multer');
const path = require('path');

const expressLayout = require('express-ejs-layouts');
require('dotenv').config()

// connect to mongoDB
require('./config/db')

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

// link you static folder i.e. images, css 
app.use(express.static('public'));
//-------------------------//


//------- Mount routes -------//
// Your code goes here
const hotelRouter = require("./routes/hotel");
const roomTypeRouter = require("./routes/roomType")(upload);
const userRouter = require("./routes/user")
const roomsRouter = require("./routes/rooms")



app.use("/hotel", hotelRouter);
app.use("/roomType", roomTypeRouter);
app.use("/user", userRouter);
app.use("/rooms", roomsRouter);
//-------------------------//

// start listening to requests coming from the PORT
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

//Uploading Images
// Set up Multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/'); // Specify the directory to store uploaded images
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });

  app.use('/roomType', roomTypeRouter);

  



