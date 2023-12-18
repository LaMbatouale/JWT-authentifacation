const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is requied"],
        unique: true,
    },
    password: {
        type: String,
        requied: [true, 'Password is required']
    }
})
module.exports = mongoose.model("Users"), userSchema;