const {User,Category,Product}=require('../../database-mysql/index')

let getclients=async(req,res)=>{
    try{
        const clients=await User.findAll({where:{rols:"user"}})
        res.json(clients)
    }
    catch(err){
        console.error(err);
    }
}
let getsellers=async(req,res)=>{
    try{
        const sellers=await User.findAll({where:{rols:"seller"}})
        res.json(sellers)
    }
    catch(err){
        console.log(err);
    }
}
let getadmin=async(req,res)=>{
  try{
    const admin=await User.findAll({where:{rols:"Admin"}})
    res.json(admin)
  }
  catch(err){
    console.error(err);
  }
}


////////// CATEGORYS ////////////////
let getAllCateg = function (req, res) {
    Category.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}

let createcat = function (req, res) {
      Category.create(req.body)
      .then(() => {
        res.json("added");
      })
      .catch((err) => {
        res.send(err);
      });
  };

let removegcateg = function (req, res) {
    console.log(req.params.idcat);
    Category.destroy({where:{ idcat: req.params.idcat }})
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

let updatecateg = function (req, res) {
    console.log(req.body);
    console.log(req.params.idcat);
    Category.update(req.body,{where:{idcat:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


/////////////// PRODUCT /////////////////
let getAllProduct =(req, res) => {
    Product.findAll().then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
   }

let deleteProduct = (req, res) => {
    Product.destroy({where:{idp:req.params.idp}}).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
  }; 

module.exports={getAllCateg,getadmin,getAllProduct,getclients,getsellers,deleteProduct,removegcateg,updatecateg,createcat}