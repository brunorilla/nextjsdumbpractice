import {TodoApp} from "./TodoApp"
import {GetServerSideProps} from "next";
import {Todo} from "../types/Todo";
import styles from '../styles/Home.module.css'
import {Nav} from "@/components/Nav";
import {useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";


interface Props {
    todos: Todo[];
}

const Home: React.FC<Props> = ({todos}) => {
    return (
        <div className={styles.main}>
            <TodoApp todos={todos}/>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {


        const todosRef = collection(db, "todos");
        const todosSnapshot = await getDocs(todosRef);

        const todos = todosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), // Note: this assumes that all fields in the document are compatible with the Todo interface
        })) as Todo[]; // Cast the data to the Todo interface

    return {
        props: {
            todos,
        },
    };
};


export default Home;
