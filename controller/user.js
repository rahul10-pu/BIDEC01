var db=require("../model/postgres.sequelize.js")
var User=db.users
module.exports={
    getUser:(req,res)=>{
       //get all the user from the db
       //User var  // select * from table users; 
       User.findAll()
       .then(
        (result)=>{
            res.status(200).send(result)
        }
       )
       .catch(
        err=>{
            res.send(err)
        }
    )
    },
    saveUser:(req,res)=>{
        // console.log(req.body)
        // res.send(req.body)


        const user={
            id:req.body.id,
            name:req.body.name,
            age:req.body.age,
            married:req.body.married
        }
        User.create(user)
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
    deleteAllUsers:(req,res)=>{
        User.destroy({
            where:{},
            truncate:false
        }).then(
            (result)=>{
                res.sendStatus(200).send(result)
            }
        )
        .catch(
            err=>{
                res.status(500).send(err)
            }
        )
    },
    deleteUserByID:(req,res)=>{
        User.destroy({
            where:{
                id:req.params.id
            }
        }).then(
            (result)=>{
                res.sendStatus(200).send(result)
            }
        )
        .catch(
            err=>{
                res.status(500).send(err)
            }
        ) 
    },
    updateAgeById:(req,res)=>{
        res.send("this is updateAgeById function")
    },
    updateUser:(req,res)=>{
        User.update(req.body,{
            where:{
                id:req.params.id
            }
        }).then(
            (result)=>{
                if(result==1){
                    res.status(200).send(result)
                } else{
                    res.status(404).send("No record found for the given ID")
                }
               
            }
        )
        .catch(
            err=>{
                console.log("Shittt")
                console.log(err)
                res.status(500).send(err)
            }
        ) 
    }
}