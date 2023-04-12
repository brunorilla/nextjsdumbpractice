import * as yup from 'yup';
import {Request, Response, NextFunction} from 'express';
import {NewUser} from '../types/User';
import {UnitsEnum} from "../types/UnitsEnum";


const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isDue: yup.boolean().required(),
    unit: yup.string().oneOf(Object.values(UnitsEnum)).required(),
})

export const validateCreateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newUser: NewUser = req.body;
        await createUserSchema.validate(newUser)
        next();
    } catch(error: any){
        console.error(error);
        return res.status(400).json({error: error.errors});
    }
}
