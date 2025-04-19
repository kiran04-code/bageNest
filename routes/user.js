const express = require("express")
const routes = express.Router()
const { createAcount} = require("../controller/user")

routes.get("/signup",(req,res)=>{
    res.render("signup")
})
routes.get("/signin",(req,res)=>{
    res.render("signin")
})
routes.post("/signup",createAcount)
module.exports = routes