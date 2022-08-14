

const route = require('express').Router();
const Order = require('../db/schema/order');

route.post('/add',async(req,res)=>{
    try {
        const order = new Order({
            name:req.body.name,
            phone_No:req.body.ph,
            capacity:req.body.capacity,
            date:(new Date()).toISOString().split('T')[0]
        });
        await order.save();
        res.status(200).json({"message":"Order Placed Sucessfully"});
        
    } catch (e) {
        res.status(500).send(e);
        
    }

})
module.exports = route;