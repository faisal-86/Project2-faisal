const {RoomType} = require('../models/RoomType')

exports.roomType_create_get = (req,res)=>{
res.render('roomType/add')
}

exports.roomType_create_post = (req,res)=>{
    console.log(req.body)
    let roomType = new RoomType(req.body);
    roomType.save()
    .then(()=>{
        res.redirect("/roomType/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })
}

exports.roomType_index_get = (req,res)=>{
    RoomType.find()
    .then((roomTypes)=>{
        res.render("roomType/index",{roomTypes})
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })

}

exports.roomType_show_get = (req,res)=>{
    console.log(req.query.id);
    RoomType.findById(req.query.id)
    .then((roomType)=>{
        console.log(roomType)
        res.render("roomType/detail", {roomType}) 
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.roomType_delete_get = (req, res) =>{
    console.log(req.query.id);
    RoomType.findByIdAndDelete(req.query.id)
    .then(() =>{
        res.redirect("/roomType/index");
    })
    .catch((err) =>{
        console.log(err);
    })
}

exports.roomType_edit_get = (req,res)=>{
    console.log(req.query.id);
    // req.query.id = '6575cf34117a456964229f84' // hardcoded id for test only
    RoomType.findById(req.query.id)
    .then((roomType)=>{
        console.log(roomType);
        res.render('roomType/edit', {roomType});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.roomType_update_put = (req,res)=>{
    console.log(req.body.id);
    console.log(req.body);

    if (req.file) {
    console.log(req.file);

    req.body.images = "/uploads/" + req.file.filename
    }

    RoomType.findByIdAndUpdate(req.body.id, req.body)
    .then(()=>{
        res.redirect('/roomType/index');
    })
    .catch((err)=>{
        console.log(err);
    })
}





