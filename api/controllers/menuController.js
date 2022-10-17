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

exports.create = (req, res) => {
  console.log(12, req.body);
  const menu = new Menu({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });

  menu
    .save(menu)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Menu.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "cant catch id",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Menu.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Menu not Found",
        });
      }
      res.send({
        message: "menu was delete",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "cant catch id",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Menu.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Menu not Found",
        });
      }
      res.send({
        message: "menu was update",
      });
    })
    .catch((res) => {
      res.status(409).send({
        message: err.message || "cant catch id",
      });
    });
};
