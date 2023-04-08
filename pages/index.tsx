import {LogInWrapper} from "../components/login/LogInWrapper"
import {GetServerSideProps} from "next";
import {Todo} from "@/types/Todo";
import styles from '../styles/Home.module.css'
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getTodos} from '@/lib/queries';
import DefaultCalendar from "@/components/calendar/Calendar";


interface Props {
    todos: Todo[];
}

const Home: React.FC<Props> = ({todos}) => {
    return (
        <div className={styles.main}>
            <div className="calendar">
                <DefaultCalendar></DefaultCalendar>
            </div>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return await getTodos();

};


export default Home;
