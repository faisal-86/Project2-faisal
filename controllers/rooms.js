const {Rooms} = require('../models/Rooms')

exports.room_create_get = (req,res)=>{
res.render('rooms/add')
}

exports.room_create_post = (req,res)=>{
    console.log(req.body)
    let rooms = new Rooms(req.body);
    rooms.save()
    .then(()=>{
        res.redirect("/rooms/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })
}

exports.room_index_get = (req,res)=>{
    Rooms.find()
    .then((rooms)=>{
        res.render("rooms/index",{rooms})
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })

}

exports.room_show_get = (req,res)=>{
    console.log(req.query.id);
    Rooms.findById(req.query.id)
    .then((rooms)=>{
        console.log(rooms)
        res.render("rooms/detail", {rooms}) 
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.room_delete_get = (req, res) =>{
    console.log(req.query.id);
    Rooms.findByIdAndDelete(req.query.id)
    .then(() =>{
        res.redirect("/rooms/index");
    })
    .catch((err) =>{
        console.log(err);
    })
}

exports.room_edit_get = (req,res)=>{
    console.log(req.query.id);
    Rooms.findById(req.query.id)
    .then((rooms)=>{
        res.render('rooms/edit',{rooms});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.room_update_put = (req,res)=>{
    console.log(req.body.id);
    Rooms.findById(req.body.id, req.body)
    .then(()=>{
        res.redirect('/rooms/index');
    })
    .catch((err)=>{
        console.log(err);
    })
}
