const express = require("express")
const routes = express.Router()
const upload = require("../config/multer-config")
const productmodel = require("../model/product-model")
const {ownerCreate,createproduct} = require("../controller/user")
// owner 
routes.get("/ownerlogin",(req,res)=>{
    res.render("owner-login")
})
routes.post("/ownercreate",ownerCreate)
// owner product
routes.get("/creteproduct",(req,res)=>{
    res.render("createproducts")
})
routes.post("/createproduct",upload.single("image"),createproduct)
// admin 
routes.get("/admin",async(req,res)=>{
    const pro = await productmodel.find({})
    res.render("admin",{products:pro})
})


module.exports = routes