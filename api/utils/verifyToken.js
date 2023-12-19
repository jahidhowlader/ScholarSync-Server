import jwt from 'jsonwebtoken'
import { createError } from './error.js';
import User from '../models/User.js';

// CHECK VERIFY USER AUTHENTICATION
export const verifyJWT = (req, res, next) => {

    const clientToken = req.headers.authorization;

    if (!clientToken) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(clientToken, process.env.ACCESS_TOKEN_SECRET, (err, email) => {

        if (err) {
            return next(createError(403, "Token is not valid!"));
        }

        req.user = email;
        next();
    })
}

// CHECK VERIFY AUTHORIZATiON USER
export const verifyUser = (req, res, next) => {

    verifyJWT(req, res, async () => {

        const users = await User.findOne({ email: req?.user?.email })

        if (req?.user?.email === req?.params?.email) {
            next();

        } else {
            return next(createError(403, "Restricted access!"));
        }
    });

}

// CHECK VERIFY AUTHORIZATiON ADMIN
export const verifyAdmin = (req, res, next) => {

    verifyJWT(req, res, async () => {

        const users = await User.findOne({ email: req?.user?.email })

        if (users?.isAdmin) {
            next();

        } else {
            return next(createError(403, "Restricted access!"));
        }
    });

}