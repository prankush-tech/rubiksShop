import mongoose from 'mongoose';

const schema = new mongoose.Schema({

    shipphingInfo:{
        hNo:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        pincode:{
            type:Number,
            required:true,
        },
        phoneNo:{
            type:Number,
            required:true,
        },
    },

    orderItems:{
        
    }


});

export const Order = mongoose.model('Order', schema);