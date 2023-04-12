import express, {Request, Response} from 'express';
import {firestore} from "./config/firebaseConfig";
import {userRouter} from "./routes/users";
import {USER_COLLECTION} from "./globals";

const app: express.Express = express();

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});

app.use(express.json());
app.use(userRouter);

app.get('/api/hello', (req: Request, res: Response) => {
    // Example usage: Read data from a Firestore document
    const docRef = firestore.collection(USER_COLLECTION).doc('OO6YedThiYiVVjlTr0nS');
    docRef.get()
        .then((doc) => {
            if (doc.exists) {
                console.log('Document data:', doc.data());
            } else {
                console.log('Document does not exist');
            }
        })
        .catch((error) => {
            console.error('Error getting document:', error);
        });

    res.json({ message: 'Hello World' });
});






