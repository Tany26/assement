const route = require('express').Router();
const Order = require('../db/schema/order');

route.delete('/delete/:id',async(req,res)=>{
    try {
         const order =  await Order.findByIdAndDelete(
            { _id: req.params.id}).then((err,order)=>{
               
                res.status(200).json({"message":"Deleted Suceefully"});
            }).catch((err)=>{
                return res.status(400).json({error: "Cannot delete order details"});
              

            })
           
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = route;