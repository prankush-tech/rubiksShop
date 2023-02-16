import express, { urlencoded } from 'express';
import dotenv from "dotenv";
import userRoute from './routes/user.js';
import orderRoute from './routes/order.js';
import { connectPassport} from './utils/Provider.js'
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { errorMiddleWare } from './middlewares/errorMiddleware.js';
import cors from 'cors';

//create and export the app
const app = express();
export default app;




//config the environmental variable
dotenv.config({
    path: './config/config.env'
});

//using session for storing user data
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    name:"PRANKUSH_COOKIE",
}))



app.use(cookieParser());
app.use(urlencoded({
    extended: true
}));
app.use(express.json());
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy")




connectPassport();
//importing routes
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);




//using error middleware
app.use(errorMiddleWare)