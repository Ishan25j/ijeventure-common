import {Request, Response, NextFunction} from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // console.log('Something went wrong', err);

    // * if the error would be instance of abstract class CustomError it will match this condition
    if (err instanceof CustomError) {

        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
        message: err.message
    });
    
};