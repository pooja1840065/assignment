// please open backend assingment 

// name, gender, nationality, email, phone number, address, and
// message.

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    phone : {
        type : String,
        required  : true,
    },
    gender : {
        type : String,
        required : true,
    },
    nationality : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }

},{timestamps: true});

module.exports = mongoose.model("User",userSchema);