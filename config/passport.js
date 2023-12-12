const passport = require("passport");
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;

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





passport.use('local-signin', new LocalStrategy(
  {
    email: 'email', // Assuming your login form uses 'email' as the username field
    password: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    // Check if the user exists in the database
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        // If user not found
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      // Check if the password is correct
      if (!user.verifyPassword(password)) {
        // If password is incorrect
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      // If user and password are correct, return the user object
      return done(null, user);
    });
  }
));











passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(async function(userId, cb) {
    // It's nice to be able to use await in-line!
    cb(null, await User.findById(userId));
  });