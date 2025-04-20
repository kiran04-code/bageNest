const jwt = require("jsonwebtoken");
require('dotenv').config()
const secretKey = process.env.JWT_SECRET;

function createToken(user) {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email
    };

    const token = jwt.sign(payload, secretKey, {
        expiresIn: "1d", // Optional but recommended: token expires in 1 day
    });
    return token;
}

function validation(token){
    const plyload = jwt.verify(token,secretKey)
    return plyload
}

module.exports = { createToken ,validation};
