import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import Stripe from 'stripe';
import dotenv from "dotenv";
import { User } from "../models/User.js";


//config the environmental variable
dotenv.config({
  path: './config/config.env'
});


const stripe = new Stripe(process.env.STRIPE_KEY);
export const YOUR_DOMAIN="http://localhost:5173"


export const placeOrder = asyncError(async (req, res, next) => {


    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
      } = req.body;


   const user = req.user._id;

   const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };

await Order.create(orderOptions);

res.status(201).json({
    success: true,
    message: "Order Placed Successfully via Cash On Delivery",
  });

});



export const placeOrderOnline = asyncError(async (req, res, next) => {


  const 
  {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
    } = req.body;



 const user = req.user._id;

 const orderOptions = 
 {
  shippingInfo,
  orderItems,
  paymentMethod,
  itemsPrice,
  taxPrice,
  shippingCharges,
  totalAmount,
  user,
};


 const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price:'price_1MbUhZSIM2plNC4iO7s0uYPB',
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: `${YOUR_DOMAIN}/paymentsuccess`,
  cancel_url: `${YOUR_DOMAIN}?canceled=true`,

});



await Order.create({
  ...orderOptions,
  orderID: session.id,
  paidAt: new Date(Date.now()),
})
.then( );
// await Order.create(orderOptions);

    res.status(201).json({
      success: true,
      sessionID: session.id,
      sessionUrl: session.url,
      orderOptions,
      message: "Order Placed Successfully via ONLINE",
    });

    
});



export const paymentVerification = asyncError(async (req, res, next) => {



})



export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({
    user: req.user._id,
  }).populate("user", "name");

  res.status(200).json({
    success: true,
    orders,
  });
});



export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user", "name");

  if (!order) return next(new ErrorHandler("Invalid Order Id", 404));

  res.status(200).json({
    success: true,
    order,
  });
});


export const getAdminOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "name");

  res.status(200).json({
    success: true,
    orders,
  });
});

export const processOrder = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler("Invalid Order Id", 404));

  if (order.orderStatus === "Processing") order.orderStatus = "Shipped";
  else if (order.orderStatus === "Shipped") {
    order.orderStatus = "Delivered";
    order.deliveredAt = new Date(Date.now());
  } else if (order.orderStatus === "Delivered")
    return next(new ErrorHandler("CUBE Already Delivered", 400));

  await order.save();

  res.status(200).json({
    success: true,
    message: "Status Updated Successfully",
  });
});



export const getAdminStats = asyncError(async (req, res, next) => {
  const usersCount = await User.countDocuments();
  const orders = await Order.find({});

  const preparingOrders = orders.filter((i) => i.orderStatus === "Processing");
  const shippedOrders = orders.filter((i) => i.orderStatus === "Shipped");
  const deliveredOrders = orders.filter((i) => i.orderStatus === "Delivered");

  let totalIncome = 0;

orders.forEach((i) => {
    totalIncome += i.totalAmount;
  });

  res.status(200).json({
    success: true,
    usersCount,
    ordersCount: {
      total: orders.length,
      processing: preparingOrders.length,
      shipped: shippedOrders.length,
      delivered: deliveredOrders.length,
    },
    totalIncome,
  });
});