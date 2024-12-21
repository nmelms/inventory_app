const { Router } = require("express");
newRouter = Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.renderForm);
newRouter.post("/", newController.addUser);

module.exports = newRouter;
