import express from 'express';
import { Request, Response } from 'express';
const server = express();

const valor: number = 12;

server.get('/health', (req: Request, res: Response) => {
    res.status(201).send({message: valor})
})

server.listen(4000, ()=> {
    console.log('ta executando...')
})