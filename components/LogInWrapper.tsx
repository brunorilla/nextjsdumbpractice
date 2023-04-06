import React, {useState} from "react";
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import {Todo} from '../types/Todo';
import styles from './layout.module.css';
import {getTodos} from "@/lib/queries";
import {deleteTodo} from "@/lib/mutations";
import Link from "next/link";

export const LogInWrapper: React.FC = ({todos, setTodos}) => {
    const [newTodos, setNewTodo] = useState<Todo[]>(todos)
    const addTodo = async (todo: Todo) => {
        await setNewTodo([...newTodos, todo]);
    }

    const handleCreateTodo = async () => {
        const fetchedTodos = await getTodos();
        await setNewTodo(fetchedTodos.props.todos)
    }

    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
        await handleCreateTodo();
    }

    return (
        <>
            <div>
                <div>
                    <h1 className={styles.todoListTitle}>Bienvenido</h1>
                </div>
                <TodoForm addTodo={addTodo} handleCreateTodos={handleCreateTodo}></TodoForm>
                <TodoList todos={newTodos} setTodos={setNewTodo} handleDeleteTodo={handleDeleteTodo}/>
            </div>
        </>

    )
}

