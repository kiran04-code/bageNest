const mongoose = require("mongoose")

productSchma = new mongoose.Schema({
  image:String,
  name:String,
  name:string,
  price:Number,
  discount:{
    type:Number,
    default:0
  },
  bgcolor:string,
  panelcolor:string,
  textcolor:string
})

const product = mongoose.model("product",product)
module.exports = product