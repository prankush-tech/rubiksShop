import express from 'express';
import {
	getAdminOrders,
	getMyOrders,
	getOrderDetails,
	placeOrder,
	placeOrderOnline,
	processOrder,
	paymentVerification
} from '../controllers/order.js';
import { authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';



const router = express.Router();


router.post('/createorder', isAuthenticated, placeOrder);
router.post('/createorderOnline',isAuthenticated, placeOrderOnline);
router.post('/paymentverification',isAuthenticated, paymentVerification);
router.get('/myorders', isAuthenticated, getMyOrders);
router.get('/order/:id', isAuthenticated, getOrderDetails);



//add admin middleware
router.get('/admin/orders', isAuthenticated, authorizedAdmin, getAdminOrders);
router.get('/admin/order/:id', isAuthenticated, authorizedAdmin, processOrder);

export default router;
