var jwt=require("jsonwebtoken")
module.exports={
    verifyToken:(req,res,next)=>{
        //fetch token
        var token=req.headers["token"]

        //check is token is there or not
        if(!token){
            return res.status(403).send("No token Provided")
        }
        //verify the token
        jwt.verify(token,"secretKey",(err, decode)=>{
            if(err){
                return res.status(403).send("Token Not correct")
            }
            req.username=decode.id// we will use it later
            next() //this refres to that next function in the router can be called
        })
    }
}