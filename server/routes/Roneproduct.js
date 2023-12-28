const Route = require("express").Router();

const controller = require("../controllers/Coneproduct.js");
// const controller = require("../controllers/Coneproduct");



Route.get("/getAll", controller.getAllProduct);
Route.get("/getOne/:id", controller.getOneProduct);
Route.get("/get/:name",controller.getOneByName)
Route.post("/createProduct", controller.createProduct);
Route.delete("/deleteProduct/:id", controller.deleteProduct);

module.exports = Route;