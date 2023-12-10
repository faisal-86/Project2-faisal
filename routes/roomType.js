const express = require("express")
const methodOverRide = require('method-override');


const router = express.Router();
router.use(express.urlencoded({'extended': true}))
router.use(methodOverRide('_method'))

const roomTypeCrl = require("../controllers/roomType")


//routes
router.get("/add", roomTypeCrl.roomType_create_get);
router.post("/add", roomTypeCrl.roomType_create_post);
router.get("/index", roomTypeCrl.roomType_index_get);
router.get("/details", roomTypeCrl.roomType_show_get);
router.get("/delete", roomTypeCrl.roomType_delete_get);
router.get("/edit",roomTypeCrl.roomType_edit_get);


router.put("/update", roomTypeCrl.roomType_update_put);


module.exports = router;