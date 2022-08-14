const route = require('express').Router();
const Order = require('../db/schema/order');

route.post('/update/:id',async(req,res)=>{
    try {
     const order =  await Order.findById(
            { _id: req.params.id})
             req.body 
            if (!order) {
                return res.status(400).json({error: "Cannot found  order details"});
            }
            if(req.body.capacity)
            order.capacity= req.body.capacity;
            if(req.body.ph)
            order.phone_No = req.body.ph;
            if(req.body.name)
            order.name = req.body.name;
            await order.save();
            res.status(200).json(order);
         
        
    } catch (e) {
        res.status(500).json(e);

        

    }
})

route.post('/updateStatus/:id',async(req,res)=>{
    try {
     const order =  await Order.findById(
            { _id: req.params.id});
            if (!order) {
                return res.status(400).json({error: "Cannot update order details"});
            }
            order.Status= req.body.status;
            await order.save();
            res.status(200).json({"message":"Update Status"});
        
        
    } catch (e) {
        res.status(500).json(e);

        
    }
})
module.exports = route;