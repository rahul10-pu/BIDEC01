
var db = require("./model/postgres.sequelize.js")
var userRouter=require("./router/user.js")
var authRouter=require("./router/auth.js")
// var bodyParser=require("body-parser")
var express=require("express")
var app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/user",userRouter)
app.use("/auth",authRouter)
// app.use("tutorial",)
db.sequelizeConfig.sync({force:false})
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
app.listen(8080)