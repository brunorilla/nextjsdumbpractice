import {firestore} from "../config/firebaseConfig";
import {auth} from '../config/firebaseConfig'
import logger from "../config/logger";
import {USER_COLLECTION} from "../globals";

async function createFirebaseUser(email: string, password: string) {
    try {
        const userRecord = await auth().createUser({
            email: email,
            password: password,
        });
        logger.info(`Successfully created new user: ${userRecord.uid}`)
        return userRecord.uid;
    } catch (error: any) {
        logger.error(`Error creating new user: ${error}`);
        return error.toString();
    }
}


async function emailExists(email: string): Promise<boolean> {
    const querySnapshot = await firestore.collection(USER_COLLECTION).where('email', '==', email).get();
    logger.info(`"querySnapshot:   ", ${querySnapshot}`)
    return !querySnapshot.empty;
}


export {createFirebaseUser, emailExists}