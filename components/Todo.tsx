import React, {useState} from "react";
import {Todo} from '../types/Todo';
import styles from './Button/Button.module.css';
import layoutStyles from '@/components/layout.module.css';
import {CustomButton} from "@/components/Button/CustomButton";

interface TodoProps {
    todo: Todo;
    onToggle: (id: string) => void;
    handleDeleteTodo: (id: string) => void
    className: Object;

}

const TodoItem: React.FC<TodoProps> = ({todo, onToggle, className, handleDeleteTodo}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleToggle = ()=> {
        onToggle(todo.id)
    }

    const handleDeletion = async (todoId: string)=> {
        setLoading(true);
        await handleDeleteTodo(todoId);
        setLoading(false);
    }

    return (
        <li className={`${className} + " list-group-item`}>
            <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={handleToggle}/>
            <span className={todo.completed ? layoutStyles.completed : ''}>{todo.title}</span> <CustomButton onClick={()=> handleDeletion(todo.id)} styling={styles.deleteButton} loading={loading}></CustomButton>
        </li>
    )
}


export default TodoItem;