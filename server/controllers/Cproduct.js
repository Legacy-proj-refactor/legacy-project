const db = require("../../database-mysql/index");

exports.createOne = function (req, res) {
  db.Product.create(req.body)
    .then(() => {
      res.json("added");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllproduct = function (req, res) {
  db.Product.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.getAll = function (req, res) {
  db.Product.findAll({where :{categorys_idcat:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.getOne = function (req, res) {
//   db.Product.findAll({where :{idp:req.params.id}})
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

exports.remove = function (req, res) {
    console.log(req.params.id);
  db.Product.destroy({where:{ idp: req.params.id }})
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.renew = function (req, res) {
    console.log(req.body);
    console.log(req.params.id);
  db.Product.update(req.body,{where:{idp:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.jib=function(req,res){
  db.User.findAll({where :{idu:req.params.id}})
  .then((user)=>{
    res.status(200).json(user)
  })
  .catch((err)=>{
    res.status(500).send(err)
    console.log(err);
  })
}
exports.fav = (req,res) => {
  db.Save.findAll()
  .then((result)=>{
    res.status(200).json(result)
  })
  .catch((err)=>{
    res.status(500).send(err)
    console.log(err);
  })
}

exports.createFav = function (req, res) {
  console.log(req.body)
  db.Save.create(req.body)
    .then(() => {
      res.json("Fav added");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findFav= (req,res) =>{

  db.Save.findAll({
    where: {
      users_idu: req.params.id,
    },
    include: {
      model: db.Product,
      as: 'product',
      attributes: ['idp', 'name', 'image', 'lastprice', 'newprice', 'rate', 'discription', 'color', 'size', 'sellername'],
    },
  }).then((result)=>{
    res.json(result)
  }).catch((err)=>{
    res.send(err);
  })
}

exports.delFav = function (req, res) {
  console.log(req.params.id)
  db.Save.destroy({where:{idsave:req.params.id}})
    .then(() => {
      res.json("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};
