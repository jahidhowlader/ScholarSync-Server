import jwt from 'jsonwebtoken'
import { createError } from './error.js';
import User from '../models/User.js';

export const verifyJWT = (req, res, next) => {

    const clientToken = req.headers.authorization;

    console.log(clientToken);

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