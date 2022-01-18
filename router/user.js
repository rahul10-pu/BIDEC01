var userRouter=require("express").Router() 
var userController=require("../controller/user.js")
var auth=require("../middleware/auth.js")
userRouter.get("/",[auth.verifyToken],userController.getUser) //localhost:8080/user/
userRouter.post("/",userController.saveUser) //localhost:8080/user/
// userRouter.post("/many",userController.saveUsers) //localhost:8080/user/many
userRouter.patch("/",userController.updateAgeById) //localhost:8080/user/
userRouter.delete("/",userController.deleteAllUsers) //localhost:8080/user/
userRouter.delete("/:id",userController.deleteUserByID) //localhost:8080/user/
userRouter.put("/:id",userController.updateUser) //localhost:8080/user/
module.exports=userRouter
//let us add middleware to few apis to enable authentication
//we will add authentication to getUser
// obj.func()

/**
 * 1. create signup api
 * localhost:8080/api/signup
 * Request Type: POST
 * {
 *      "username" : "rahul",
 *      "passowrd" : "pass",
 *      "emailID" : "rahul@gmail.com"
 * }
 * Response : Success/Failure along with the message
 * 
 * 2. create login api
 * localhost:8080/api/signin
 * Request Type: POST
 * Body:
 * {
 *      "username":"rahul",
 *      "password":"pass"
 * } 
 * Response : Success - Token(JWT) / Failure with the message
 */