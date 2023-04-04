import {collection, addDoc} from "firebase/firestore";
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