'use strict'
const path=require("path")
require('dotenv').config()


//connection from monogdb
const mongoose = require('mongoose');
function connection() {
    
    mongoose.connect("mongodb+srv://tanya:mohan%4026@cluster0.6pzpe.mongodb.net/?retryWrites=true&w=majority"
, {
        useNewUrlParser: true,
  
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected")
    }).catch(e => {
        console.log(e);
    });


}
module.exports = connection;
