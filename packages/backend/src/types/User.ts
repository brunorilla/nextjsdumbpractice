import {UnitsEnum} from "./UnitsEnum";

export type User = {
    id: string;
    name: string;
    surname: string;
    password: string;
    email: string;
    unit: UnitsEnum;
    isDue: boolean;
}


export type NewUser = {
    name: string;
    surname: string;
    password: string;
    email: string;
    unit: UnitsEnum;
    isDue: boolean;
}