exports.index_get = (req,res)=> {
    res.render("hotel/index", {
        "message": "Welcome to Blog App"
    })
}