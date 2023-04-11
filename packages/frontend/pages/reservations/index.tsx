import styles from '../../styles/Home.module.css';

interface PostProps {
    children: React.ReactNode
}


const Posts: React.FC<PostProps> = ({children}) => {
    return (<>
        <div className={styles.main}>
            <h1>Reservar</h1>
            {children}
        </div>
    </>);
}


export default Posts;