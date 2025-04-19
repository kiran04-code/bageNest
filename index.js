require('dotenv').config();
const express = require("express")
const path = require("path")
const {mongoDB} = require("./config/mongoose.connect")
const routes = require("./routes/user")
const owener = require("./routes/owner")
const product = require("./routes/product")

const app = express()
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static(path.resolve("./public")))


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

const port = process.env.PORT || 3008;
app.get("/",(req,res)=>{
    res.render("home")
})

mongoDB(process.env.MONGO_URI ).then(()=>{
    console.log("MongoDB is Connected!")
}).catch((err)=>{
    console.log("ERROR:",err)
})

app.use("/",product)
app.use("/",owener)
app.use("/",routes)
app.listen(port,(req,res)=>{
    console.log(`Server is Runing On port ${port}`)
})