const express = require("express")
const routes = express.Router()
const { createAcount ,checkUser} = require("../controller/user")

routes.get("/",async(req,res)=>{
    res.render("home", { user: req.user });

})
routes.get("/register",async(req,res)=>{
    res.render("index", { user: req.user });

})
routes.get("/profile",async(req,res)=>{
    res.render("profile", { user: req.user });

})
routes.get("/logout",async(req,res)=>{
    res.clearCookie("token").redirect("/")

})
routes.get("/",async(req,res)=>{
    res.render("index", { user: req.user });

})

routes.post("/signup",createAcount)
routes.post("/signin",checkUser)
module.exports = routes 