const Route = require("express").Router();
const controller = require("../controllers/Adminrols");
const { route } = require("./Rauthentication");

Route.get("/clients",controller.getclients)
Route.get("/sellers",controller.getsellers)
Route.get("/categorys",controller.getAllCateg)
Route.get("/products",controller.getAllProduct)
Route.get("/getadmin",controller.getadmin)
Route.delete("/deleteprod/:idp",controller.deleteProduct)
Route.delete("/deletecateg/:idcat",controller.removegcateg)
Route.put("/updatecat/:idcat",controller.updatecateg)
Route.post("/creatcat",controller.createcat)

module.exports=Route