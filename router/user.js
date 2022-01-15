var userRouter=require("express").Router() 
var userController=require("../controller/user.js")
userRouter.get("/",userController.getUser) //localhost:8080/user/
userRouter.post("/",userController.saveUser) //localhost:8080/user/
// userRouter.post("/many",userController.saveUsers) //localhost:8080/user/many
userRouter.patch("/",userController.updateAgeById) //localhost:8080/user/
userRouter.delete("/",userController.deleteAllUsers) //localhost:8080/user/
userRouter.delete("/:id",userController.deleteUserByID) //localhost:8080/user/
userRouter.put("/:id",userController.updateUser) //localhost:8080/user/
module.exports=userRouter

// obj.func()