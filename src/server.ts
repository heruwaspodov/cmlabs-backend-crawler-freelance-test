import express from 'express';
import { Response } from '@/types/response'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data:Response = {
        status: true,
        code: 200,
        data: { message: "WSPDV - Crawler API" }
    }
    return res.status(200).json(data)
});

app.all('*', (req, res) => {
    const data:Response = {
        status: false,
        code: 404,
        data: { message: "route not found" }
    }
    res.status(404).json(data);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
