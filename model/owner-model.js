const mongoose = require("mongoose")

ownerSchma = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin: Boolean,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})

const owner = mongoose.model("owener",ownerSchma)
module.exports = owner