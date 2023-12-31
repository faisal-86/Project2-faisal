const {Rooms} = require('../models/Rooms')
const {RoomType} = require('../models/RoomType')

exports.room_create_get = (req,res)=>{
    RoomType.find()
.then((roomTypes) => {
    console.log(roomTypes);
    res.render("rooms/add", {roomTypes});
})
.catch((err) => {
    console.log(err);
})   
}

exports.room_create_post = (req,res)=>{
    // console.log(req.body);
    let rooms = new Rooms(req.body);
    rooms.save()
    .then(()=>{
            RoomType.findById(req.body.RoomType)
            .then((roomType) => {
                console.log(rooms);
                roomType.rooms.push(rooms);
                roomType.save();
            })
            .catch((err)=>{
                console.log(err)
                res.send('Please Try Again !')
            })
        res.redirect("/rooms/index");
    })
    .catch((err)=>{
        console.log(err)
        res.send('Please Try Again !')
    })
}

exports.room_index_get = (req,res)=>{
    Rooms.find().populate('RoomType')
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
    Rooms.findById(req.query.id).populate('RoomType')
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
    RoomType.find().then(
        roomTypes => {
            Rooms.findById(req.query.id).populate('RoomType')
            .then((rooms)=>{
                res.render('rooms/edit',{rooms, roomTypes});
            })
            .catch((err)=>{
                console.log(err);
            })



        }
    )
    
    .catch((err)=>{
        console.log(err);
    })
}

exports.room_update_post = (req,res)=>{
    console.log(req.body.id);
    Rooms.findByIdAndUpdate(req.body.id, req.body).populate()
    .then(()=>{
        res.redirect('/rooms/index');
    })
    .catch((err)=>{
        console.log(err);
    })
}
