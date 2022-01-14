var userRouter=require("express").Router() 
var userController=require("../controller/user.js")
userRouter.get("/",userController.getUser) //localhost:8080/user/
userRouter.post("/",userController.saveUser) //localhost:8080/user/
// userRouter.post("/many",userController.saveUsers) //localhost:8080/user/many
userRouter.patch("/",userController.patchUser) //localhost:8080/user/
userRouter.delete("/",userController.deleteUser) //localhost:8080/user/
userRouter.put("/",userController.putUser) //localhost:8080/user/
module.exports=userRouter

// obj.func()