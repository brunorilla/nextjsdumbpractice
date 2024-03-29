import {NewUser} from "@/types/User"
import axios from 'axios';
import {API_ENDPOINT, RESERVATION_CREATE_ENDPOINT, USER_CREATE_ENDPOINT} from "@/globals";
import {useAuth} from "@/lib/auth";

export const createTodo = async (title: string) => {
  /*
    try {
        const todoRef = await addDoc(collection(db, 'todos'), {
            title: title,
            completed: false
        });
        console.log(`Todo with ID ${todoRef.id} created.`);
    } catch (error) {
        console.error('Error creating todo:', error);
    }

   */
};


export const deleteTodo = async (id: string) => {
   /*
    try {
        const todoDocRef = doc(db, 'todos', id);
        await deleteDoc(todoDocRef);

    } catch(error){
        console.error(`Couldn't delete Todo with ID ${id}`);
    }

    */
}


export async function createNewUser(newUser: NewUser) {
    try {
       const response = await axios.post(`${API_ENDPOINT}${USER_CREATE_ENDPOINT}`, newUser)
       console.log(response.data);
       return response;
    } catch (error) {
        console.error("Error creating user: ", error);
        return error;
    }
}


export async function createNewReservation( input: any, token: any) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        return await axios.post(`${API_ENDPOINT}${RESERVATION_CREATE_ENDPOINT}`, input, config);
    } catch(error){
        console.error("Error creating reservation ", error);
        return error
    }
}