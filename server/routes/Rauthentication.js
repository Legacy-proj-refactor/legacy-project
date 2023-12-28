const Route = require("express").Router();
const controller = require("../controllers/athentication");


Route.get("/alluser", controller.getAll);
Route.post("/oneuser",controller.getone)
Route.post("/adduser",controller.adduser)

module.exports = Route;
