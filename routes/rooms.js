const express = require("express")
const router = express.Router();
router.use(express.urlencoded({'extended': true}))

const roomCrl = require("../controllers/rooms");
const isLoggedIn = require("../config/isLoggedIn");
const isAdmin = require("../config/isAdmin");


//routes
router.get("/add", isAdmin, isLoggedIn, roomCrl.room_create_get);
router.post("/add", isAdmin, isLoggedIn, roomCrl.room_create_post);
router.get("/index", isLoggedIn, roomCrl.room_index_get);
router.get("/detail", isLoggedIn, roomCrl.room_show_get);
router.get("/delete", isAdmin, isLoggedIn, roomCrl.room_delete_get);
router.get("/edit", isAdmin, isLoggedIn, roomCrl.room_edit_get);
router.post("/update", isAdmin, isLoggedIn, roomCrl.room_update_post);


module.exports = router;