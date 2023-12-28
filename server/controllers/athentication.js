// require your Model phrase here
const {User} = require ('../../database-mysql/index');
const bcrypt= require("bcrypt")
const jwt =require("jsonwebtoken")
const cookieparser=require("cookie-parser")

const saltRound=10


let getAll = async (req, res) => {
  try{
    const users= await User.findAll();
    res.json(users)
  }
  catch(err){
    console.error(err);
  }
};
let getone=async(req,res)=>{
  console.log(req.body);
  try {
    const email = req.body.email ; 
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      bcrypt.compare(req.body.password.toString(),user.password,async(err,response)=>{
        if(err) return res.json({Error:"password compare error"});
        if(response){
          const name=user.name
          const token=jwt.sign({name},"jwt-secret-key",{expiresIn:"1d"});
          user.dataValues.token=token
          return res.json(user)
        }
        else{
          return res.status(500).json({Error:"password not matched"})
        }
      });
    }else{
      return res.status(500).json({Error:"no email existed"})
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

let adduser=async(req,res)=>{
  try{
    const hashpasword=await bcrypt.hash(req.body.password.toString(),saltRound)
    const user = await User.create({
      name:req.body.name,
      email:req.body.email,
      password:hashpasword,
      rols:req.body.rols
    });
    console.log("user adedd");
    res.json(user)
  }
  catch(e){
    console.log("error",e);
  }
}

module.exports={getAll,getone,adduser}
