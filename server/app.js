import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import orderRoute from './routes/order.js';
import { connectPassport } from './utils/Provider.js';
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
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		name: 'PRANKUSH_COOKIE',

		// cookie: {
		// 	secure: process.env.NODE_ENV === 'development' ? false : true,
		// 	httpOnly: process.env.NODE_ENV === 'development' ? false : true,
		// 	sameSite: process.env.NODE_ENV === 'development' ? false : 'none'
		// }
	})
);

app.use(cookieParser());
app.use(express.json());
app.use(
	urlencoded({
		extended: true
	})
);

app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL,
		methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
	})
);

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.set('trust proxy')

connectPassport();

app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);


app.use(errorMiddleWare);
