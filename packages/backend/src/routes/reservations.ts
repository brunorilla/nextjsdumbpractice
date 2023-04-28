import express, {Router, Request, Response} from 'express';
import {firestore} from "../config/firebaseConfig";
import {RESERVATIONS_COLLECTION} from "../globals";
import logger from "../config/logger";
import {verifyToken} from "../middleware/authentication";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log("GETTING RESERVATIONS")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/reservations/create', verifyToken, async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        res.status(200).send(req.body)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})


export const reservationsRouter = router;