const express = require('express');
const passport = require("passport");
const router =  express.Router();


// require index controller
const indexCntrl = require("../controllers/index");

// Routes
router.get("/", indexCntrl.index_get);



router.get("/auth/google", passport.authenticate("google",{
    scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/hotel/index',
      failureRedirect: '/hotel/index'
    }
  ));


  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/hotel/index');
    });
  });



  

  module.exports = router;