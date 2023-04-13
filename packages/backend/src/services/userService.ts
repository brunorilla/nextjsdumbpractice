import {firestore} from "../config/firebaseConfig";
import {auth} from '../config/firebaseConfig'

async function createFirebaseUser(email: string, password: string) {
    try {
        const userRecord = await auth().createUser({
            email: email,
            password: password,
        });
        console.log('Successfully created new user:', userRecord.uid);
        return userRecord.uid;
    } catch (error) {
        console.error('Error creating new user:', error);
        return '';
    }
}



async function emailExists(email: string): Promise<boolean> {
    const querySnapshot = await firestore.collection('users').where('email', '==', email).get();
    return !querySnapshot.empty;
}


export {createFirebaseUser, emailExists}