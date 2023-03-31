import React from 'react';
import {Todo} from '../types/Todo';
import TodoItem from './Todo'
import styles from '@/styles/utils.module.css';

interface TodoListProps {
    todos: Todo[];
    setTodos:  (value: (((prevState: Todo[]) => Todo[]) | Todo[])) => void;
}


const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) => {

    const handleToggle = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }


    return (
        <div>
            <ul className={styles.unordered}>
            {todos.map((todo) => (
                <TodoItem className={styles.listItem} key={todo.id} todo={todo} onToggle={handleToggle}/>
            ))}
            </ul>
        </div>
    )
}

export default TodoList