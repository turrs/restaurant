module.exports = (app) => {
  const menus = require("../controllers/menuController");
  const router = require("express").Router();
  var bodyParser = require("body-parser");
  var jsonParser = bodyParser.json();
  router.get("/", menus.findAll);
  router.post("/", jsonParser, menus.create);
  router.get("/:id", menus.findOne);
  router.delete("/:id", menus.delete);
  router.put("/:id", jsonParser, menus.update);
  app.use("/api/menu", router);
};
