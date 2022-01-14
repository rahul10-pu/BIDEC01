module.exports={
    getUser:(req,res)=>{
        res.send("this is getUser function")
    },
    saveUser:(req,res)=>{
        console.log(req.body)
        res.send(req.body)
    },
    deleteUser:(req,res)=>{
        res.send("this is deleteUser function")
    },
    patchUser:(req,res)=>{
        res.send("this is patchUser function")
    },
    putUser:(req,res)=>{
        res.send("this is putUser function")
    }
}