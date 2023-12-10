require('dotenv').config()
const mongoose = require('mongoose')
const mongodbURI = process.env.DATABASEURL
mongoose.connect(process.env.DATABASEURL)
.then(() => console.log(`Connected to MongoDB database named: ${mongoose.connection.name}!!!`))
.catch((error) => console.error("Error: MongoDB is not connected. " + error.message));
