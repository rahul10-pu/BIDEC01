var http= require("http")
// console.log(http)
var ser=function(req,res){
   
    if(req.method=="GET"){
        res.end("Yesss..this is get request")
    }
    if(req.method=="POST"){
        console.log(req)
        res.end("Its post")
    }
    if(req.method=="DELETE"){
        res.end("Yesss..this is delete request")
    }
    if(req.method=="PATCH"){
        res.end("Yesss..this is patch request")
    }
    if(req.method=="PUT"){
        res.end("Yesss..this is put request")
    }
}
http.createServer(ser).listen(8080)


