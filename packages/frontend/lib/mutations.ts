import {collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import {db} from '@/lib/firebase'
import {NewUser} from "@/types/User"
import "firebase/firestore";
import firebase from "firebase/compat";
//import { functions} from '/firebase';

export const createTodo = async (title: string) => {
    try {
        const todoRef = await addDoc(collection(db, 'todos'), {
            title: title,
            completed: false
        });
        console.log(`Todo with ID ${todoRef.id} created.`);
    } catch (error) {
        console.error('Error creating todo:', error);
    }
};


export const deleteTodo = async (id: string) => {
    try {
        const todoDocRef = doc(db, 'todos', id);
        await deleteDoc(todoDocRef);

    } catch(error){
        console.error(`Couldn't delete Todo with ID ${id}`);
    }
}


export async function createNewUser(newUser: NewUser) {
    try {
        const { name, surname, password, email, unit, isDue } = newUser;
       // const checkUserExists = functions.httpsCallable('checkIfUserExists');
       // const { data } = await checkUserExists({ email: email });
       // if (data.exists) {
        //    throw new Error('A user with this email address already exists');
       // }
        const response = await addDoc(collection(db, 'user'), { name, surname, password, email, unit, isDue});

        console.log("New user created with ID: ", response.id);
        return response;
    } catch (error) {
        console.error("Error creating user: ", error);
    }
}