const Stage = require("../models/stages");

exports.index = (req, res) => {
    Stage.find()
        .then(stages => res.json(stages))
        .catch(err => res.status(404).send(err));
};

exports.show = (req, res) => {
    Stage.findOne({
        _id: req.params.id
    })
        .then(stage => res.json(stage))
        .catch(err => res.status(401).send(err));
};

exports.create = (req, res) => {
    Stage.create(req.body.stage)
        .then(() =>
              res.status(201).send({ success: "Stage was successfully created" })
             )
        .catch(err => res.status(400).send(err));
};

exports.edit = (req, res) => {
    Stage.findOne({
        _id: req.params.id,
    })
        .then(stage => res.json(stage))
        .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
    Stage.updateOne(
        {
            _id: req.body.id,
        },
        req.body.stage,
        {
            runValidators: true
        }
    )
        .then(() =>
              res.status(202).send({ success: "Your stage was successfully updated" })
             )
        .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
    Stage.deleteOne({
        _id: req.body.id,
    })
        .then(() =>
              res.status(202).send({ success: "Your stage was successfully destroyed" })
             )
        .catch(err => res.status(400).send(err));
};
