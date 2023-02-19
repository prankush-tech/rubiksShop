import mongoose from 'mongoose';

const schema = new mongoose.Schema({

    shippingInfo:{
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
        pinCode:{
            type:Number,
            required:true,
        },
        phoneNo:{
            type:Number,
            required:true,
        },
    },

    orderItems:{
        
        MKOTO:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
        },
        NKOTO:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
        },
        BKOTO:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
        },
    },

    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    },

    paymentMethod:{
        type:String,
        enum:["COD","Online"],
        default:"COD",
    },

    orderID:
    {
       type:String,
       ref:'Payment',
    },

    paidAT:Date,

    itemsPrice:{
        type:Number,
        required:true,
        default:0.0,
    },

    taxPrice:{
        type:Number,
        required:true,
        default:0.0,
    },

    shippingCharges:{
        type:Number,
        required:true,
        default:0.0,
    },

    totalAmount:{
        type:Number,
        required:true,
        default:0.0,
    },

    orderStatus:{
        type:String,
        enum:["Processing","Shipped","Delivered"],
        default:"Processing",
    },
    deliveredAt:Date,
    createdAt:{
        type:Date,
        default:Date.now,
    }

});

export const Order = mongoose.model('Order', schema);