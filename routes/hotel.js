const express = require('express');
const router =  express.Router();
const hotelCntrl = require("../controllers/hotel");
// const isLoggedIn = require("../config/isLoggedIn");
// router.get("/add", isLoggedIn, hotelCntrl.hotel_create_get);
// router.post("/add", isLoggedIn, hotelCntrl.hotel_create_post);

router.get("/index", hotelCntrl.hotel_index_get);
module.exports = router;