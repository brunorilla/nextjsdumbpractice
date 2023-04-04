import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {Todo} from "@/types/Todo";


export const getTodos = async ()=> {
    const todosRef = collection(db, "todos");
    const todosSnapshot = await getDocs(todosRef);
    const todos = todosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Note: this assumes that all fields in the document are compatible with the Todo interface
    })) as Todo[]; // Cast the data to the Todo interface
    console.log(todos)
    return {
        props: {
            todos,
        },
    };
}

