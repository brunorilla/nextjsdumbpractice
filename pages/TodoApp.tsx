import React, {useState} from "react";
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import {Todo} from '../types/Todo';
import styles from '../components/layout.module.css';

export const TodoApp: React.FC = ({todos, setTodos}) => {
    const [newTodos, setNewTodo] = useState<Todo[]>(todos)
    const addTodo = async (todo: Todo) => {
       await setNewTodo([...newTodos, todo]);
    }

    return (
        <>
            <div>
                <div>
                    <h1 className={styles.todoListTitle}>Todo App</h1>
                    <div className={styles.decLine}></div>
                </div>
                <TodoForm addTodo={addTodo}></TodoForm>
                <TodoList todos={newTodos} setTodos={setNewTodo}/>
            </div>
        </>

    )
}

