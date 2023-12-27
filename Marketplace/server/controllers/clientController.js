const Client = require("../database-mysql")
// const db=require("../../database-mysql")

module.exports = {
getAllclients : async(req,res)=>{
    try {
        const response = await Client.findAll()
        res.status(200).send(response)
    } catch (error) {
        throw error
    }
}, 

getByEmail : async (req,res)=>{
    try {
        const response = await Client.findAll({where:{email:req.params.email}})
        res.status(200).send(response)
    } catch (error) {
        throw error
    }
},
updateClient : async (req,res)=>{
    try { 
       const result = await Client.update(req.body, {where:{id:req.params.idu}})
       res.json(result)
    } catch (error) {
       throw error
    }
   },




    getone : async (req, res) => {
    try {
      const email = req.body.email;
      const user = await Client.findOne({ where: { email: email } });
  
      if (user) {
        // If a password is provided in the request, attempt to update the user's password
        if (req.body.password) {
          bcrypt.compare(req.body.password.toString(), user.password, async (err, response) => {
            if (err) return res.json({ Error: "Password comparison error" });
            if (response) {
              // Update the user's password
              const newPassword = req.body.newPassword;
              const hashedPassword = await bcrypt.hash(newPassword, 10);
  
              // Update the user's password in the database
              await Client.update({ password: hashedPassword }, { where: { email: email } });
  
              return res.json({ Success: "Password updated successfully" });
            } else {
              return res.status(500).json({ Error: "Current password not matched" });
            }
          });
        } else {
          // Handle other user data updates here (e.g., name, email, etc.)
          const updatedUserData = {
            name: req.body.newName || user.name,
            email: req.body.newEmail || user.email,
            // Add other fields as needed
          };
  
          // Update the user's data in the database
          await Client.update(updatedUserData, { where: { email: email } });
  
          return res.json({ Success: "User data updated successfully" });
        }
      } else {
        return res.status(500).json({ Error: "No user with the provided email exists" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ Error: 'Internal Server Error' });
    }
  },
}



