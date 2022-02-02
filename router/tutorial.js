const controller=require('../controller/tutorial.js')

var router=require('express').Router()
router.get("/",controller.findAll)
router.post("/",controller.create)
router.get("/:id",controller.findByID)
router.delete("/",controller.deleteAll)
router.delete("/:id",controller.deleteByID)
router.put("/:id",controller.update)
exports.router=router
