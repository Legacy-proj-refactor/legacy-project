const express = require("express")
const clientRouter = express.Router()
const  {getAllclients,getByEmail,updateClient,getone} = require("../controllers/clientController.js") 

clientRouter.get("/getAllClient",getAllclients)
clientRouter.get("/getEmail/:email",getByEmail)
clientRouter.put("/update/:id",updateClient)
clientRouter.put("/getone",getone)
module.exports = clientRouter;