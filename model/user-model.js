const mongoose = require("mongoose");
const { createHash, randomBytes } = require("crypto");
const { createToken } = require("../service/auth");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    card: { type: Array, default: [] },
    orders: { type: Array, default: [] },
    contact: Number,
    picture: String,
    salt: String
}, { timestamps: true });

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    const salt = randomBytes(16).toString("hex");
    const hash = createHash("sha256").update(salt + user.password).digest("hex");

    user.salt = salt;
    user.password = hash;
    next();
});

userSchema.statics.matchPassToken = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not found.");

    const hash = createHash("sha256")
        .update(user.salt + password)
        .digest("hex");

    if (hash !== user.password) throw new Error("Incorrect password.");

    const token = createToken(user);
    return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
