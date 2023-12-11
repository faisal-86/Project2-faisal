const express = require("express")
const methodOverRide = require('method-override');


const router = express.Router();
router.use(express.urlencoded({'extended': true}))
router.use(methodOverRide('_method'))

const roomCrl = require("../controllers/rooms")


//routes
router.get("/add", roomCrl.room_create_get);
router.post("/add", roomCrl.room_create_post);
router.get("/index", roomCrl.room_index_get);
router.get("/detail", roomCrl.room_show_get);
router.get("/delete", roomCrl.room_delete_get);
router.get("/edit",roomCrl.room_edit_get);


router.put("/update", roomCrl.room_update_put);


module.exports = router;