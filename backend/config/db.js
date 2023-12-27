
require("dotenv").config();
const mongoose = require("mongoose")

const url = process.env.url;

const dbConnect = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connection sucessfull");
    }).catch((error)=>{
        console.log("DB Connection failed");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;