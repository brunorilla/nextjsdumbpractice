import express, {Router, Request, Response} from 'express';
import {firestore} from "../config/firebaseConfig";
import {NewUser, User} from "../types/User";
import {USER_COLLECTION} from "../globals";
import {validateCreateUser} from "../middleware/validators";
import {createFirebaseUser} from "../services/userService";
import {emailExists} from "../services/userService";
import {createUser} from "../controllers/userController";
import logger from "../config/logger";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection(USER_COLLECTION).get();
        const users: User[] = snapshot.docs.map((doc) => {
            const {name, surname, email, isDue, unit, firebaseUID} = doc.data();
            const user: User = {id: doc.id, name, surname, email, isDue, unit, firebaseUID};
            return user;
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/user/create', validateCreateUser, async (req: Request, res: Response) => {
    try {
        const {password, ...newUser} = req.body;
        const emailAlreadyExists: boolean = await emailExists(newUser.email)
        if (emailAlreadyExists) {
            return res.status(400).json("{error: 'Email already in use'}")
        }
        const firebaseUID = await createFirebaseUser(newUser.email, password)
        if (firebaseUID !== '') {
            const user: User = await createUser(firebaseUID, newUser as NewUser)
            res.status(201).json(user);
        } else {
            res.status(400).json(firebaseUID);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})


export const userRouter = router;