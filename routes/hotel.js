const express = require('express');
const router =  express.Router();
router.use(express.urlencoded({extended: true}));
const hotelCntrl = require("../controllers/hotel");


router.get("/add", hotelCntrl.hotel_create_get);
router.post("/add", hotelCntrl.hotel_create_post);
router.get("/index", hotelCntrl.hotel_index_get);
router.get("/detail", hotelCntrl.hotel_show_get);
router.get("/delete", hotelCntrl.hotel_delete_get);
router.get("/edit", hotelCntrl.hotel_edit_get);
router.post("/update", hotelCntrl.hotel_update_post);

module.exports = router;