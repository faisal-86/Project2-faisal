const {Room} = require('../models/Room')

exports.room_create_get = (req,res)=>{
res.render('room/add')
}

exports.room_create_post = (req,res)=>{
    console.log(req.body)
    let room = new Room(req.body);
    room.save()
    .then(()=>{
        res.redirect("/room/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })
}

exports.room_index_get = (req,res)=>{
    Room.find()
    .then((rooms)=>{
        res.render("room/index",{rooms})
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })

}

exports.room_show_get = (req,res)=>{
    console.log(req.query.id);
    Room.findById(req.query.id)
    .then((room)=>{
        console.log(room)
        res.render("room/detail", {room}) 
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.room_delete_get = (req, res) =>{
    console.log(req.query.id);
    Room.findByIdAndDelete(req.query.id)
    .then(() =>{
        res.redirect("/room/index");
    })
    .catch((err) =>{
        console.log(err);
    })
}

exports.room_edit_get = (req,res)=>{
    console.log(req.query.id);
    Room.findById(req.query.id)
    .then((room)=>{
        res.render('room/edit',{room});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.room_update_put = (req,res)=>{
    console.log(req.body.id);
    Room.findById(req.body.id, req.body)
    .then(()=>{
        res.redirect('/room/index');
    })
    .catch((err)=>{
        console.log(err);
    })
}
