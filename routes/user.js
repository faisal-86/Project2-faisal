// Load express module
const express = require("express");
const methodOverride = require("method-override");
const isLoggedIn = require('../config/isLoggedIn');
const isAdmin = require('../config/isAdmin');



// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));


// require index controller
const userCntrl = require("../controllers/user");



// Multer
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/avatars/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })





// routes
router.get("/add", isAdmin, isLoggedIn, userCntrl.user_create_get);
router.post("/add", isAdmin, isLoggedIn, userCntrl.user_create_post);
router.get("/index",  isAdmin, isLoggedIn, userCntrl.user_index_get);
router.get("/detail", isLoggedIn, userCntrl.user_show_get);
router.get("/delete", isAdmin, isLoggedIn, userCntrl.user_delete_get);
router.get("/edit", isLoggedIn, userCntrl.user_edit_get);

router.put("/update", upload.single('avatar'), isLoggedIn, userCntrl.user_update_put);



module.exports = router;