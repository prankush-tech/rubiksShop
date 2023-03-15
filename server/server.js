import app from './app.js';
import {connectDB} from './config/database.js';
import Stripe from 'stripe';
import Razorpay from 'razorpay';


connectDB()



export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get('/',(req,res)=>{
    res.send("<h1>working</h1>");
})



app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
