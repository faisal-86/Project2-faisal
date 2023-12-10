//API's / Functions
exports.hotel_get = (req, res) =>{
    res.render("hotel/index");
}

//Create Operation
exports.hotel_create_get = (req,res) =>{
    res.render("hotel/add");
}