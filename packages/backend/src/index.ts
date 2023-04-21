import express, {Request, Response} from 'express';
import {userRouter} from "./routes/users";

import cors from 'cors';
import {verifyToken} from "./middleware/authentication";

const app: express.Express = express();

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(userRouter);


app.get('/protected', verifyToken ,(req: Request, res: Response) => {
    console.log(res)
    res.send({message: 'success'})
});






