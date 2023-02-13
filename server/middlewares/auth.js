import ErrorHandler from'../utils/ErrorHandler.js';


export const isAuthenticated = (req, res, next) => {

    const token = req.cookies['PRANKUSH_COOKIE'];

    if(!token)
    {
        return next(new ErrorHandler("Note LOgged IN ",401));
    }


    next();
}