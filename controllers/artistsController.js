const Artist = require("../models/artist");
const User = require("../models/user");

exports.index = (req, res) => {
  Artist.find()
    .then(artists => res.json(artists))
    .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {
  Artist.findOne({
    _id: req.params.id
  })
    .then(artist => res.json(artist))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  if(req.isAuthenticated()) {
    User.findOne({
      _id: req.session.userId
    })
      .then(user => {
        if(user.role == 'ADMIN') {
          console.log(req.body.artist);
          Artist.create(req.body.artist)
            .then(() =>
              res.status(201).send({ success: "Artist was successfully created" })
            )
            .catch(err => res.status(400).send(err));
        }
        else return;
      })
      .catch(err => res.status(400).send(err));
  };
  
};

exports.edit = (req, res) => {
  if(req.isAuthenticated()) {
    User.findOne({
      _id: req.session.userId
    })
      .then(user => {
        if(user.role == 'ADMIN') {
          Artist.findOne({
            _id: req.params.id,
          })
            .then(artist => res.json(artist))
            .catch(err => res.status(404).send(err));
        }
        else return;
      })
      .catch(err => res.status(400).send(err));
  };
  
};

exports.update = (req, res) => {
  if(req.isAuthenticated()) {
    User.findOne({
      _id: req.session.userId
    })
      .then(user => {
        if(user.role == 'ADMIN') {
          Artist.updateOne(
            {
              _id: req.body.id,
            },
            req.body.artist,
            {
              runValidators: true
            }
          )
            .then(() =>
              res.status(202).send({ success: "Your artist was successfully updated" })
            )
            .catch(err => res.status(400).send(err));
        }
        else return;
      })
      .catch(err => res.status(400).send(err));
  };
  
};

exports.destroy = (req, res) => {
  if(req.isAuthenticated()) {
    User.findOne({
      _id: req.session.userId
    })
      .then(user => {
        if(user.role == 'ADMIN') {
          Artist.deleteOne({
            _id: req.body.id,
          })
            .then(() =>
              res.status(202).send({ success: "Your artist was successfully destroyed" })
            )
            .catch(err => res.status(400).send(err));
        }
        else return;
      })
      .catch(err => res.status(400).send(err));
  };
};
