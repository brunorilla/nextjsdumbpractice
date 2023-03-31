import styles from './Button.module.css'
import {ButtonHTMLAttributes} from "react";
import {Button} from 'antd';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick: any;
    loading: boolean;
}


export const CustomButton: React.FC<ButtonProps> = ({text, onClick, loading}) => {
    return <Button className={styles.formButton} onClick={onClick} loading={loading}
    >{text}</Button>
}