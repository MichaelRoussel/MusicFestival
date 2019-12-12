const Performance = require("../models/performance");

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
  Performance.create(req.body.performance)
    .then(() =>
      res.status(201).send({ success: "Performance was successfully created" })
    )
    .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
  Performance.findOne({
    _id: req.params.id,
  })
    .then(performance => res.json(performance))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
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
};

exports.destroy = (req, res) => {
  Performance.deleteOne({
    _id: req.body.id,
  })
    .then(() =>
      res.status(202).send({ success: "Your performance was successfully destroyed" })
    )
    .catch(err => res.status(400).send(err));
};
