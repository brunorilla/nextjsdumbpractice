import {ServiceEnum} from "@/types/ServiceEnum";

export type Reservation = {
    id: string;
    user_id: string;
    service: ServiceEnum;
    dateTime: Date;
}


export type NewReservation = {
    user_id: string;
    service: ServiceEnum;
    dateTime: Date;
}