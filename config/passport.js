const passport = require("passport");
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/User');

passport.use(new GoogleStrategy(
  // Configuration object
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  // The verify callback function
  // Let's use async/await!
  async function(accessToken, refreshToken, profile, cb) {
    

    try{
    // Look to see if the user exists
    let user = await User.findOne({
        googleId: profile.id
    });

    // If there is a user return it
    if (user){
        return cb(null,user);
    } else{       
        //Else, create a new user
        user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
        });
        console.log(user);
        return cb(null,user);
    }
} catch(err){
    return cb(err);

    }

  }
));






passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(async function(userId, cb) {
    // It's nice to be able to use await in-line!
    cb(null, await User.findById(userId));
  });