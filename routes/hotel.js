const express = require('express');
const router =  express.Router();
const hotelCntrl = require("../controllers/hotel");

router.get("/index", hotelCntrl.hotel_index_get);


module.exports = router;