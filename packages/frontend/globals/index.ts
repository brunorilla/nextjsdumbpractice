export const API_ENDPOINT = "http://localhost:3001";
export const USER_CREATE_ENDPOINT = "/user/create";
export const RESERVATION_CREATE_ENDPOINT = "/reservations/create";





// REGEXP FOR ERROR MESSAGES:

export const userNotFoundErrorMsgRegExp: RegExp = /(auth|user[- ]?(not found|not[- ]?found)|not found)/i;
