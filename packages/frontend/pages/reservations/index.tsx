import styles from '../../styles/Home.module.css';
import {CustomButton} from "@/components/Button/CustomButton";

interface PostProps {
    children: React.ReactNode
}


const Posts: React.FC<PostProps> = ({children}) => {

     const getProtected = async () => {
         const response = await fetch('http://localhost:3001/protected', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${localStorage.getItem('token')}`
             }
         });
         const data = await response.json();
         console.log(data);
     }

    return (<>
        <div className={styles.main}>
            <h1>Reservar</h1>
            {children}
            <CustomButton onClick={getProtected} loading={false} text={"Probar"}/>
        </div>
    </>);
}


export default Posts;