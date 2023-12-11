// Load express module
const express = require("express");
const methodOverride = require("method-override");




// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));


// require index controller
const userCntrl = require("../controllers/user");


// routes
router.get("/add",  userCntrl.user_create_get);
router.post("/add",  userCntrl.user_create_post);
router.get("/index", userCntrl.user_index_get);
router.get("/detail", userCntrl.user_show_get);
router.get("/delete", userCntrl.user_delete_get);
router.get("/edit", userCntrl.user_edit_get);
router.put("/update", userCntrl.user_update_put);



module.exports = router;