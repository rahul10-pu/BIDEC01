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

 var authRouter=require("express").Router() 
 var authController=require("../controller/auth.js")
 authRouter.post("/signup",authController.signup) //localhost:8080/auth/signup
 authRouter.post("/signin",authController.signin) //localhost:8080/auth/signin
 module.exports=authRouter