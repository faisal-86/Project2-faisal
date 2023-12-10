const Hotel = require("../models/Hotel");

exports.hotel_index_get = (req, res) =>{
    const hotels = Hotel.getAll();
    res.render("hotel/index", { hotels });
  }