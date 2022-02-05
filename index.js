const express=require('express')
const server=express()

const db=require("./models/index.js")




const tutorialRouter=require("./router/tutorial.js")
server.use(express.json())
server.get("/",(req, res)=>{
    res.json("Welcome to my application")
})
server.use("/tutorial",tutorialRouter.router)
db.mongoose.connect(
    db.url
).then(()=>{
    console.log("Mongo db connected")
    server.listen(3000,()=>{
        console.log("Server got started at localhost:3000")
    })
}).catch(
    err=>{
        console.log("Mongo db Not connected", err)
    }
)

