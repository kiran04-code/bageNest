const mongoose = require("mongoose")

productSchma = new mongoose.Schema({
  image:Buffer,
  name:String,
  price:Number,
  discount:{
    type:Number,
    default:0
  },
  bgcolor:String,
  panelcolor:String,
  textcolor:String
})

const product = mongoose.model("products",productSchma)
module.exports = product