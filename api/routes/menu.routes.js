module.exports = (app) => {
  const menus = require("../controllers/menuController");
  const router = require("express").Router();
  router.get("/", menus.findAll);
  app.use("/api/menu", router);
};
