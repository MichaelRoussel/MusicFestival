const Artist = require("../models/artist");

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
  Artist.create(req.body.artist)
    .then(() =>
      res.status(201).send({ success: "Artist was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  Artist.findOne({
    _id: req.params.id,
  })
    .then(artist => res.json(artist))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
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
};

exports.destroy = (req, res) => {
  Artist.deleteOne({
    _id: req.body.id,
  })
    .then(() =>
      res.status(202).send({ success: "Your artist was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};
