import express from 'express';
import passport from 'passport';
import { getAdminStats } from '../controllers/order.js';
import { myProfiles, logout, getAdminUsers } from '../controllers/user.js';
import { authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.get('/googlelogin', passport.authenticate('google', { scope: [ 'profile' ] }));

router.get(
	'/login',
	passport.authenticate('google'),
	// 	scope: [ 'profile' ],
	// 	successRedirect: process.env.FRONTEND_URL
	// })

	(req, res, next) => {
		res.send('Logged IN');
	}
);

//login
router.get('/me', isAuthenticated, myProfiles);

//logout
router.get('/logout', logout);


//adminn Routes
router.get("/admin/users", isAuthenticated,authorizedAdmin,getAdminUsers)

router.get("/admin/stats" , isAuthenticated,authorizedAdmin, getAdminStats)
export default router;
