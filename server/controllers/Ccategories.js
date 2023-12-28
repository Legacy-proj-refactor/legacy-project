const db = require("../../database-mysql/index");

exports.createOne = function (req, res) {
  db.Category.create(req.body)
    .then(() => {
      res.json("added");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAll = function (req, res) {
  db.Category.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.remove = function (req, res) {
    console.log(req.params.idcat);
  db.Category.destroy({where:{ idcat: req.params.id }})
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
  db.Category.update(req.body,{where:{idcat:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
