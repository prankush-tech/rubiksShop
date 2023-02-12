import express from 'express';
import dotenv from "dotenv";
import userRoute from './routes/user.js';
import { connectPassport} from './utils/Provider.js'


//create and export the app
const app = express();
export default app;


//config the environmental variable
dotenv.config({
    path: './config/config.env'
});



connectPassport();
                    
                    








//importing routes
app.use("/api/v1", userRoute);
