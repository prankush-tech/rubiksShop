import app from './app.js';
import {connectDB} from './config/database.js';
import Stripe from 'stripe';



connectDB()


app.get('/',(req,res)=>{
    res.send("<h1>working</h1>");
})



app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
