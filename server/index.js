const express = require("express");


// const Product= require("../database-mysql");
const authrout=require("./routes/Rauthentication")
const admin =require("./routes/Radmin")
const Product= require("../database-mysql");
// const User =require("../database-mysql/index.js")
// const translateRoute = require("./routes/Rbrowses");
const navbar =require("./routes/Rnavbar")
const translateRoute2 = require("./routes/Rcategories");
const translateRoute3 =require("./routes/Rproduct")
const translateRoute4 = require("./routes/Roneproduct");
// const translateRoute5= require("./routes/clientRouter")

const cookieparser=require("cookie-parser")
const cors = require("cors")
const app = express();


const PORT = 3000;

app.use(express.json());



app.use(cors({
  origin: ["http://localhost:3001"],

  methods: ["POST","GET","PUT","DELETE"],
  credentials: true,
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(cookieparser())

// app.use("/api/browse",translateRoute)
app.use("/api/categories",translateRoute2)
app.use("/api/product",translateRoute3)
app.use("/api/Oneproduct",translateRoute4)
app.use("/api/market", authrout);
app.use("/api/admin",admin)
app.use("/api/navbar",navbar)


app.get('/get',(req,res)=>{
  res.send("hello")
})


// app.post("/login",(req,res)=>{
//   Product.User.create(req.body)
//   .then((result)=>{
//     res.send(result)
//   }).catch((err)=>{
//     console.log(err);
//   })
// })


app.listen(3000, () => {
  console.log(`listening on port ${PORT}`);
});

