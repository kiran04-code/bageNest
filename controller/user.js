const user = require("../model/user-model")
const owner = require("../model/owner-model")
const productmodel = require("../model/product-model")


// user created!
async function createAcount(req,res){
    const {name,email,password} = req.body
    const users = await user.findOne({email:email})
    if(users) return res.render("index",{user: req.user,error:"Alredy Used has been register"})
  const result = await user.create({
    name,
    email,
    password
    })
    res.render("index",{user: req.user,error:"Signup Succesfull"})
}
async function checkUser(req,res){
   try {
    const {email,password} = req.body
  const token =  await user.matchPassToken(email,password)
  res.cookie("token", token).redirect("/")
   } catch (error) {
     res.render("index",{user: req.user,error:"Invalid Credetial"})
   }
}
// admin creted!
async function ownerCreate(req,res){
    const {name,email,password} = req.body
  const owener  =    await owner.find()
  if(owener.length>0) {
    return res.render("owner",{error:"Alredy  one admin has login"})
  } else{
    await owner.create({
      name,
      email,
      password
    })
     res.redirect("/admin")
}
}
async function ownerchck(req,res){
  const {email,password} = req.body
   await  owner.findOne({email,password})
  res.redirect("/admin")
}
// creat the product for user!
async function createproduct(req,res) {
  const {name,price,discount,bgcolor,panelcolor,textcolor }  = req.body
    const product = await productmodel.create({
      image:req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor
    })
    console.log(product)
    res.render("createproducts",{error:"product is Created!"})
}
module.exports = { 
    createAcount,
    ownerCreate,
    checkUser,
    createproduct,
    ownerchck
}