import express from 'express';
import passport from 'passport';
import { myProfiles, logout } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';


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

export default router;
