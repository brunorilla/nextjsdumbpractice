import React from "react";
import {Todo} from '../types/Todo';
import {Form} from 'react-bootstrap';

interface TodoProps {
    todo: Todo;
    onToggle: (id: number) => void;
    className: Object;
}

const TodoItem: React.FC<TodoProps> = ({todo, onToggle, className}) => {
    const handleToggle = ()=> {
        onToggle(todo.id)
    }
    return (
        <li className={`${className} + " list-group-item`}>
            <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={handleToggle}/>
            <span className={todo.completed ? 'line-through text-gray-400': ''}>{todo.title}</span>
        </li>
    )
}


export default TodoItem;