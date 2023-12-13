const express = require('express');
const router =  express.Router();
const bookingCntrl = require("../controllers/booking");
const isLoggedIn = require('../config/isLoggedIn');

//routes
router.get("/add", isLoggedIn, bookingCntrl.booking_create_get);
router.post("/add", isLoggedIn, bookingCntrl.booking_create_post);
router.get("/index", isLoggedIn, bookingCntrl.booking_index_get);
router.get("/detail", isLoggedIn, bookingCntrl.booking_show_get);
router.get("/delete", isLoggedIn, bookingCntrl.booking_delete_get);
router.get("/edit", isLoggedIn, bookingCntrl.booking_edit_get);
router.post("/update", isLoggedIn, bookingCntrl.booking_update_post);

module.exports = router;