import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


// * interface for jwt user's payload
interface UserPayload {
    id: string;
    email: string;
}

// * This is how we can reach into existing file declaration and make a modification to it.
declare global {
    namespace Express {
        interface Request{
            currentUser?: UserPayload;
        }
    }
}


export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        return next();
    }
    
    /* 
    * which is equivalent to 
    if (!req.session || req.session.jwt) {
        return res.send({ currentUser: null });
    }
    */

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload;
    } catch (err) { }
    next();
};