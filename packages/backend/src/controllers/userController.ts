import {firestore} from "../config/firebaseConfig";
import {USER_COLLECTION} from "../globals";
import {NewUserWithoutPassword, User} from "../types/User";


export async function createUser(firebaseUID: string, newUser: NewUserWithoutPassword): Promise<User> {
    const userRef = await firestore.collection(USER_COLLECTION).add({firebaseUID: firebaseUID, ...newUser})
    return {firebaseUID: firebaseUID, id: userRef.id, ...newUser}
}
