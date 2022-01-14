
var db = require("./model/postgres.sequelize.js")
var userRouter=require("./router/user.js")
var express=require("express")()
express.get("/",(req,res)=>{
    res.send("Home Page")
})
express.use("/user",userRouter)
db.sequelizeConfig.sync({force:true})
.then(
    ()=>{
        console.log("Database connection done")
    }
)
.catch(
    (err)=>{
        console.log("DB connection failed")
        console.log(err)
    }
)
express.listen(8080)