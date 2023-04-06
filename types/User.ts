import {UnitsEnum} from "@/types/UnitsEnum";

export type User = {
    id: string;
    name: string;
    password: string;
    email: string;
    unit: UnitsEnum;
    isDue: boolean;
}


export type NewUser = {
    name: string;
    password: string;
    email: string;
    unit: UnitsEnum;
    isDue: boolean;
}