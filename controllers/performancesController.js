const Performance = require("../models/performance");
const User = require("../models/user");
const Artist = require("../models/artist");
const Stage = require("../models/stages");

exports.index = (req, res) => {
  Performance.find()
    .then(performances => res.json(performances))
    .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {
  Performance.findOne({
    _id: req.params.id
  })
    .then(performance => res.json(performance))
    .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
  if(req.isAuthenticated()) {
    User.findOne({
      _id: req.session.userId
    })
      .then(user => {
        if(user.role == 'ADMIN') {
          console.log(req.body.performance);
          Artist.findOne({
            name: req.body.performance.artist
          })
          .then(artist => {
            if(artist){
              Stage.findOne({
                name: req.body.performance.stage
              })
              .then(stage => {
                if(stage) {
                  Performance.create(req.body.performance)
              .then(() =>
                res.status(201).send({ success: "Performance was successfully created" })
              )
              .catch(err => console.log(err));
                }
                else {
                  console.log("Stage does not exist");
                }
              })
              .catch(err => console.log(err));
            }
            else {
              console.log("Artist does not exist");
            }
          })
          .catch(err => console.log(err));
          
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
          Performance.findOne({
            _id: req.params.id,
          })
            .then(performance => res.json(performance))
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
          Artist.findOne({
            name: req.body.performance.artist
          })
          .then(artist => {
            if(artist){
              Stage.findOne({
                name: req.body.performance.stage
              })
              .then(stage => {
                if(stage) {
                  Performance.updateOne(
                    {
                      _id: req.body.id,
                    },
                    req.body.performance,
                    {
                      runValidators: true
                    }
                  )
                    .then(() =>
                      res.status(202).send({ success: "Your performance was successfully updated" })
                    )
                    .catch(err => res.status(400).send(err));
                }
                else {
                  console.log("Stage does not exist");
                }
              })
              .catch(err => console.log(err));
            }
            else {
              console.log("Artist does not exist");
            }
          })
          .catch(err => console.log(err));
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
          Performance.deleteOne({
            _id: req.body.id,
          })
            .then(() =>
              res.status(202).send({ success: "Your performance was successfully destroyed" })
            )
            .catch(err => res.status(400).send(err));
        }
        else return;
      })
      .catch(err => res.status(400).send(err));
  };
};
