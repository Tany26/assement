'use strict'
const mongoose=require('mongoose')




const schema = new mongoose.Schema({
   

   name:{
    type:String,
    maxlength:20,
    required:true
   },
   phone_No:{
    type:Number,
    required:true,
    minlength:10,
    maxlength:10

   },
  
   Status:{
      type:String,
      enum : ['Placed','Dispatched','Packed','Delivered'],
      required:true,
      default:'Placed'
   },
   capacity:{
      type:Number,
      required:true
   },
   date:{
    type:Date,
   }

}, {timestamps:true})
module.exports= mongoose.model('Order' , schema)