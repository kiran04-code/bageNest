const mongoose = require("mongoose")

async function mongoDB(url){
    mongoose.connect(url)
}

module.exports = {mongoDB}