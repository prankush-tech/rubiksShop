import express from 'express';
import {getAdminOrders, getMyOrders, getOrderDetails, placeOrder ,placeOrderOnline, processOrder} from '../controllers/order.js';
import {authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';



const router = express.Router();
router.post("/createorder", placeOrder);


router.post("/createorderOnline", placeOrderOnline);



router.get("/myorders",isAuthenticated, getMyOrders);

router.get("/order/:id",isAuthenticated, getOrderDetails);

//add admin middleware
router.get("/admin/orders",isAuthenticated,authorizedAdmin, getAdminOrders);


router.get("/admin/order/:id",isAuthenticated,authorizedAdmin, processOrder);


export default router;