const express = require("express")
const router = express.Router();
router.use(express.urlencoded({'extended': true}))

const roomCrl = require("../controllers/rooms")


//routes
router.get("/add", roomCrl.room_create_get);
router.post("/add", roomCrl.room_create_post);
router.get("/index", roomCrl.room_index_get);
router.get("/detail", roomCrl.room_show_get);
router.get("/delete", roomCrl.room_delete_get);
router.get("/edit",roomCrl.room_edit_get);
router.post("/update", roomCrl.room_update_post);


module.exports = router;