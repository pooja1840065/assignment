
 const User = require("../model");

 exports.registerUser = async(req,res)=>{
    try {
         //  now u can copy code for user login and resgitfer form bakdnend
    } catch (error) {
        return res.status(500).json({
             success : false,
             message : "Unable to register"
         })
     }
 }