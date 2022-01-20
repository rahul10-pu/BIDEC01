
var db = require("./model/postgres.sequelize.js")
var userRouter=require("./router/user.js")
var authRouter=require("./router/auth.js")
var Role=db.role
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
db.sequelizeConfig.sync({force:true})
.then(
    ()=>{
        initializeDB()
        console.log("Database connection done")
    }
)
.catch(
    (err)=>{
        console.log("DB connection failed")
        console.log(err)
    }
)
function initializeDB(){
    Role.create(
        {
            id:1,
            name:"admin"
        }
    )
    Role.create(
        {
            id:2,
            name:"user"
        }
    )
}
app.listen(8080)