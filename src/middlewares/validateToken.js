import jwt, {decode} from 'jsonwebtoken';
import {TOKEN_SECRET} from "../config.js";

export const authRequired = (req, res, next) => {
    const {token} = req.cookies;
    if (!token) return res.status(401).json({error: 'Token is missing, authorization denied'});

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({message: "invalid token"});
      
        req.decoded = decoded;
    })

    next()
}