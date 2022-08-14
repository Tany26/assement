'use strict'
const path=require("path")
require('dotenv').config()


//connection from monogdb
const mongoose = require('mongoose');
function connection() {
    
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
  
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected")
    }).catch(e => {
        console.log(e);
    });


}
module.exports = connection;