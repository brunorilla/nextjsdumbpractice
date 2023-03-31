import styles from '../../styles/Home.module.css';
import variables from '../../styles/variables.module.scss'
import {Nav} from "@/components/Nav";


interface PostProps {
    children: React.ReactNode
}


const Posts: React.FC<PostProps> = ({children}) => {
    return (<>
        <div className={styles.main}>
            <h1>Posts</h1>
            {children}
        </div>
    </>);
}


export default Posts;