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
