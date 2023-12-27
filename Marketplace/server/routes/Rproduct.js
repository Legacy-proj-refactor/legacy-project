const Route = require("express").Router();
const controller3 = require("../controllers/Cproduct");






Route.post("/add", controller3.createOne);
Route.get("/get",controller3.getAllproduct)
Route.get("/get/:id",controller3.getAll)
Route.delete("/del/:id",controller3.remove)
Route.put("/upd/:id",controller3.renew)
Route.get('/jib/:id',controller3.jib)
Route.get('/fav',controller3.fav)
Route.post("/addFav", controller3.createFav);
Route.get("/getAll/:id",controller3.findFav)
Route.delete("/delFav/:id",controller3.delFav)
module.exports = Route;


