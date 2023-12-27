const Route = require("express").Router();
const controller = require("../controllers/navbar");

Route.get("/bestprod",controller.getbyrate)
Route.get("/seved",controller.getsave)
Route.get("/search",controller.getbyname)
module.exports = Route;
