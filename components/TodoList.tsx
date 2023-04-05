import React from 'react';
import {Todo} from '../types/Todo';
import TodoItem from './Todo'
import styles from '@/styles/utils.module.css';

interface TodoListProps {
    todos: Todo[];
    setTodos: (value: (((prevState: Todo[]) => Todo[]) | Todo[])) => void;
    handleDeleteTodo: (id: string) => void;
}


const TodoList: React.FC<TodoListProps> = ({todos, setTodos, handleDeleteTodo}) => {

    const handleToggle = (id: string) => {
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
                    <TodoItem className={styles.listItem} key={todo.id} todo={todo} onToggle={handleToggle}
                              handleDeleteTodo={handleDeleteTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList