const mongoose = require("mongoose")

userSchma = new mongoose.Schema({
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
    card:{
        type:Array,
        default:[]
    },
    isAdmin: Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

const user = mongoose.model("user",userSchma)
module.exports = user