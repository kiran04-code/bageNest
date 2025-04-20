require('dotenv').config();
const express = require("express")
const path = require("path")

const app = express()
// const dbgr = require("debug")("devlopment:mongoose")
const {mongoDB} = require("./config/mongoose.connect")
const cookiesparser = require("cookie-parser")
const routes = require("./routes/user")
const owener = require("./routes/owner")
const product = require("./routes/product");
const { checkauth } = require("./middleware/user");


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static(path.resolve("./public")))
app.use(cookiesparser())
app.use(checkauth("token"));


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



const port = process.env.PORT || 3008;
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