const express = require("express")
const methodOverRide = require('method-override');





const router = express.Router();
router.use(methodOverRide('_method'))


const roomTypeCrl = require("../controllers/roomType")

// Multer
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })






//routes
router.get("/add", roomTypeCrl.roomType_create_get);
router.post("/add", roomTypeCrl.roomType_create_post);
router.get("/index", roomTypeCrl.roomType_index_get);
router.get("/detail", roomTypeCrl.roomType_show_get);
router.get("/delete", roomTypeCrl.roomType_delete_get);

router.get("/edit",roomTypeCrl.roomType_edit_get);


router.post("/update", upload.single('images'), roomTypeCrl.roomType_update_put);






module.exports = router;