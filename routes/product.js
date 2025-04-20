const express = require("express")
const routes = express.Router()
const productmodel = require("../model/product-model")
routes.get("/shop",async(req,res)=>{
    const pro = await productmodel.find({})
    res.render("shop",{products:pro})
})

module.exports = routes