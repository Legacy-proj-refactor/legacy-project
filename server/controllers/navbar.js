const {User,Product,Save} = require ('../../database-mysql/index');
const { Op } = require('sequelize');


let getbyrate =async(req,res)=>{
    try{
        const topprod=await Product.findAll({
            where: {
            rate: {
              [Op.between]: [3, 5]
            }
          }})
          res.json(topprod)
    }
    catch (err) {
        console.log(err);
    }
}

let getsave = async(req,res)=>{
  try{
    const saved=await Save.findAll()
    res.json(saved)
  }
  catch(err){
    console.log(err);
  }
}

let getbyname=async(req,res)=>{
  try{
    const search=await Product.findOne({where:{name:req.body.name}})
    res.json(search)
  }
  catch(err){
    console.log(err);
  }
}

module.exports={getbyrate,getsave,getbyname}

