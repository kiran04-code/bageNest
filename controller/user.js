const user = require("../model/user-model")

async function createAcount(req,res){
    const {name,email,password} = req.body
    await user.create({
    name,
    email,
    password
    })
    res.render('home')
}

module.exports = { 
    createAcount
}