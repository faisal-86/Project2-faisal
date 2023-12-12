const express = require("express")
const methodOverRide = require('method-override');




const router = express.Router();
router.use(express.urlencoded({'extended': true}))
router.use(methodOverRide('_method'))

const multerImg = require('../config/multerImg');

const roomTypeCrl = require("../controllers/roomType")




// ... Your routes and middleware usage





//routes
router.get("/add", roomTypeCrl.roomType_create_get);
router.post("/add", roomTypeCrl.roomType_create_post);
router.get("/index", roomTypeCrl.roomType_index_get);
router.get("/detail", roomTypeCrl.roomType_show_get);
router.get("/delete", roomTypeCrl.roomType_delete_get);

router.get("/edit",roomTypeCrl.roomType_edit_get);


router.put("/update", roomTypeCrl.roomType_update_put);

//  route for handling image uploads
 router.post('/public/uploads/:roomTypeId', multerImg, roomTypeCrl.roomType_upload_image_post);


module.exports = router;