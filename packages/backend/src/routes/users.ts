import express, {Router, Request, Response} from 'express';
import {firestore} from "../config/firebaseConfig";
import {NewUser, User} from "../types/User";
import {USER_COLLECTION} from "../globals";
import {validateCreateUser} from "../utils/validators";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection(USER_COLLECTION).get();
        const users: User[] = snapshot.docs.map((doc) => {
            const {name, surname, email, isDue, unit, password} = doc.data();
            const user: User = {id: doc.id, name, surname, email, isDue, unit, password};
            return user;

        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/user/create', validateCreateUser ,async (req: Request, res: Response) => {
    try {
        const newUser: NewUser = req.body;
        console.log(req.body)
        const emailExists: boolean = await firestore
            .collection(USER_COLLECTION)
            .where('email', '==', newUser.email)
            .get()
            .then((querySnapshot) => !querySnapshot.empty);

        if (emailExists) {
            return res.status(400).json({error: 'Email already in use'})
        }

        const userRef = await firestore.collection(USER_COLLECTION).add(newUser)
        const user: User = {id: userRef.id, ...newUser}
        res.status(201).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

export const userRouter = router;