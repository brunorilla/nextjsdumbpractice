import {collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import {db} from '@/lib/firebase'

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