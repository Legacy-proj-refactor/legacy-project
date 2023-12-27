const Route = require("express").Router();
const controller2 = require("../controllers/Ccategories");







Route.post("/add", controller2.createOne);
Route.get("/get",controller2.getAll)
Route.delete("/del/:id",controller2.remove)
Route.put("/upd/:id",controller2.renew)


module.exports = Route;
