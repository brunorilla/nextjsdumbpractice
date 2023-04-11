import express, {Request, Response} from 'express';

const app = express();

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});

app.get('/api/hello', (req: Request, res: Response) => {
    console.log("hello");
    res.json({ message: 'Hello World' });
});
