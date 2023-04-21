import admin from 'firebase-admin';
import {Request, Response, NextFunction} from "express";

export async function verifyToken(req: any, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        console.dir(req.headers)
        if (!authHeader) {
            throw new Error('Missing authorization header');
        }

        const token = authHeader.split(' ')[1];
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;

        console.log("Decoded token: ", decodedToken);
        next();
    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized');
    }
}