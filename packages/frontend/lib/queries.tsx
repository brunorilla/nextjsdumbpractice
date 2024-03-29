import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {Todo} from "@/types/Todo";


export const getTodos = async ()=> {
    const todosRef = collection(db, "todos");
    const todosSnapshot = await getDocs(todosRef);
    const todos = todosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Todo[];
    console.log(todos)
    return {
        props: {
            todos,
        },
    };
}

