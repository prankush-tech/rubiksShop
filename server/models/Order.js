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
        
        MKoto:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
        },
        NKoto:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
        },
        BKoto:{
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },

    paymentMethod:{
        type:String,
        enum:["COD","Online"],
        default:"COD",
    },

    paymentInfo:{
       type:mongoose.Schema.ObjectId,
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