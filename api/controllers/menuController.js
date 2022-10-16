const db = require("../models");
const Menu = db.menus;

exports.findAll = (req, res) => {
  Menu.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while",
      });
    });
};
