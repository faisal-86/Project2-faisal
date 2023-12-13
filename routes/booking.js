const express = require('express');
const router =  express.Router();
const bookingCntrl = require("../controllers/booking");
const isLoggedIn = require('../config/isLoggedIn');

//routes
router.get("/booking",   bookingCntrl.booking_create_first_get);
router.post("/booking",   bookingCntrl.booking_create_first_post);

router.get("/add",   bookingCntrl.booking_create_second_get);
router.post("/add",   bookingCntrl.booking_create_second_post);

router.get("/index",   bookingCntrl.booking_index_get);
router.get("/detail",   bookingCntrl.booking_show_get);
router.get("/delete",   bookingCntrl.booking_delete_get);
router.get("/edit",   bookingCntrl.booking_edit_get);
router.post("/update",   bookingCntrl.booking_update_post);

module.exports = router;