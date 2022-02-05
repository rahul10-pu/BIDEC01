const db = require("../models/index.js")
const Tutorial=db.tutorials

//save tutorial docs
exports.create=(req,res)=>{
   const tutorial= new Tutorial({
       title:req.body.title,
       description:req.body.description,
       published:req.body.published

   })
   tutorial.save(tutorial).then(
       data=>{
           res.send(data)
       }
   ).catch(
       err=>{
           res.status(500).send(err)
       }
   )
}

exports.findAll=(req,res)=>{
    const title=req.query.title
    var condition=title?{title:{$regex:new RegExp(title)}}:{}
    Tutorial.find(condition).then(
        data=>{
            res.send(data)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}

exports.findByID=(req,res)=>{
    Tutorial.findById(req.params.id).then(
        data=>{
            res.send(data)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}

exports.deleteAll=(req,res)=>{
    Tutorial.deleteMany({}).then(
        data=>{
            res.send(data+" documents got deleted")
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}

exports.deleteByID=(req,res)=>{
    Tutorial.findByIdAndRemove(req.params.id).then(
        data=>{
            if(!data){
                res.send("No id found")
            }else{
                res.send(data+" documents got deleted")
            } 
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}

exports.update=(req,res)=>{
    Tutorial.findByIdAndUpdate(req.params.id, req.body).then(
        data=>{
            res.send(data)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}