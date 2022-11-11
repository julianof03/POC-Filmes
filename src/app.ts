import express from 'express';
import filmeRouter from '../src/router/filmeRouter.js'
import cors from "cors";
import dotenv from "dotenv";

const server = express();
server.use(cors());
server.use(express.json());
dotenv.config();

server.use(filmeRouter);

server.listen(4000, ()=> {
    console.log('ta executando...')
})