var db=require("../model/postgres.sequelize.js")
var Auth=db.auth
var jwt=require('jsonwebtoken')
module.exports={
    signup:(req,res)=>{
        console.log("In signup function")
        const user={
            userName:req.body.username,
            password:req.body.password,
            emailID:req.body.emailid
        }
        Auth.create(user)
        .then(
            (result)=>{
                res.sendStatus(201).send(result)
            }
        )
        .catch(
            err=>{
                res.send(err)
            }
        )
    },
    signin:(req,res)=>{
        //get all the user from the db
        //User var  // select * from table users; 
        var userName=req.body.username
        Auth.findOne(
            {
                where:{
                    userName:userName
                }
            }
        )
        .then(
         (user)=>{
             if(!user){
                 res.status(401).send("Username not found")
             }
             if(user.password!=req.body.password){
                res.status(401).send("Incorrect Password")
             }
             //now what?
             //send the jwt token 
             var token=jwt.sign({id:userName},"secretKey",{
                 expiresIn:86400//24 hrs
             })
             res.status(200).send(token)
         }
        )
        .catch(
         err=>{
             res.send(err)
         }
     )
     },
}