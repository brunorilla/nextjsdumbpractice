import React, {useEffect, useState} from 'react';
import {Todo} from '@/types/Todo';
import {CustomButton} from "@/components/Button/CustomButton";
import {Form} from 'react-bootstrap';
import styles from '@/styles/utils.module.css' ;
import {createTodo} from "@/lib/mutations";
import {getTodos} from "@/lib/queries";

interface TodoFormProps {
    addTodo: (todo: Todo) => void;
    handleCreateTodos: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo, handleCreateTodos}) => {
    const [title, setTitle] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        await createTodo(title);
        setTitle("");
        await handleCreateTodos();
        setLoading(false);
    };


    return (
        <form className={styles.addTodoForm}>
            <div className={styles.relative}>
                <input id="addtodo" className={styles.inputStyle} required value={title} type={"text"}
                       onChange={(e) => setTitle(e.target.value)}/>
                <label className={styles.labelStyle} htmlFor={"addtodo"}>Email</label>
            </div>
            <div className={styles.relative}>

            <input id="password"
                       className={styles.inputStyle}
                       required
                       type={"password"}
                       onChange={(e) => setPassword(e.target.value)}/>
                <label className={styles.labelStyle} htmlFor={"addtodo"}>Password</label>
            </div>
            <CustomButton text={"Ingresar"} type={"submit"} onClick={handleSubmit} loading={loading}></CustomButton>
        </form>

    )
}


export default TodoForm;