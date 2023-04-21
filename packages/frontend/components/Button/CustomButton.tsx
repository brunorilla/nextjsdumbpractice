import styles from './Button.module.css'
import {ButtonHTMLAttributes} from "react";
import {Button} from 'antd';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    onClick: any;
    loading: boolean;
    styling?: string
}


export const CustomButton: React.FC<ButtonProps> = ({text, onClick, loading, styling}) => {
    return <Button className={styling !== styles.deleteButton ? styles.formButton: styles.deleteButton} onClick={onClick} loading={loading}  >{text}</Button>
}