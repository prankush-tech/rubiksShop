import ErrorHandler from '../utils/ErrorHandler.js';

export const isAuthenticated = (req, res, next) => {
	const token = req.cookies['PRANKUSH_COOKIE'];

	if (!token) {
		return next(new ErrorHandler('Note Logged IN ', 401));
	}

	next();
};


export const authorizedAdmin = (req, res, next) => {

	if (req.user.role !== 'admin') {
		return next(new ErrorHandler('ONLY PRANKUSH (ADMIN) ALLOWED ', 405));
	}

	next();
};

