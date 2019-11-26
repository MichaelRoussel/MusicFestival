const User = require("../models/user");

exports.create = (req, res) => {
  User.create(req.body.user)
    .then(() =>
      res.status(201).send({ success: "User was created successfully" })
    )
    .catch(err => res.status(400).send(err));
};
