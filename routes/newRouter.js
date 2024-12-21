const { Router } = require("express");
newRouter = Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.renderForm);

module.exports = newRouter;
