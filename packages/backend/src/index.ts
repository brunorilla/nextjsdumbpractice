import express, {Request, Response} from 'express';
import {userRouter} from "./routes/users";
import cors from 'cors';

const app: express.Express = express();

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(userRouter);








