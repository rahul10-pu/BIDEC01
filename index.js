const express=require('express')
const server=express()
const tutorialRouter=require("./router/tutorial.js")
server.use(express.json())
server.get("/",(req, res)=>{
    res.json("Welcome to my application")
})
server.use("/tutorial",tutorialRouter.router)
server.listen(3000,()=>{
    console.log("Server got started at localhost:3000")
})