const User = require("../models/User")


// CRUD Operations

// Create
exports.user_create_get = (req, res) => {
    res.render("user/add");
  }
  
  exports.user_create_post = (req, res) => {
    console.log(req.body);
    let user = new User(req.body);
  
    // Save User
    user.save()
    .then(() => {
      res.redirect("/user/index");
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later!!")
    })
  }

// Show operation
  exports.user_index_get = (req, res) => {
    User.find()
    .then((users) => {
      res.render("user/index", {users});
    })
    .catch((err) => {
      console.log(err);
    })
  
  }


  exports.user_show_get = (req, res) => {
    console.log(req.query.id);
    User.findById(req.query.id)
    .then((user) => {
      res.render("user/detail", {user})
    })
    .catch((err) => {
      console.log(err);
    })
  }

//Delete Operation
  exports.user_delete_get = (req, res) => {
    console.log(req.query.id);
    User.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/user/index");
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //Update Operation
  exports.user_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((user) => {
      res.render("user/edit", {user});
    })
    .catch(err => {
      console.log(err);
    })
  }

  exports.user_update_put = (req, res) => {
    console.log(req.body.id);
    console.log(req.body);
    console.log(req.file);

    req.body.avatar = "/uploads/avatars/" + req.file.filename

    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/user/index");
    })
    .catch(err => {
      console.log(err);
    })
  }

