const express = require("express")
const path = require("path")


const app = express()
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

const port = 3008;
app.get("/",(req,res)=>{
    res.render("home")
})
app.listen(port,(req,res)=>{
    console.log(`Server is Runing On port ${port}`)
})