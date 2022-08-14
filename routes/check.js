const route = require('express').Router();
const Order = require('../db/schema/order');

route.get('/checkCapacity/:Date',async(req,res)=>{
    const data = await Order.find({date:req.params.Date});
const maxCapacity = 50;
let cap=0;
   data.forEach((e)=>{
    cap+=e.capacity;
   })
   if(cap<maxCapacity)
   res.status(200).json({"Capacity Left": maxCapacity-cap+"L"});
   
   res.status(200).json({"Capacity Left": 0});
})

module.exports = route;