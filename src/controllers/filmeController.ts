import { Request, Response } from 'express';
import { GetFilme } from '../repositories/filmeRepositorie.js'

async function GetAllFilme(req: Request, res: Response) {
    try {
  
        const filme: string[] = await GetFilme();
      res.status(201).send(filme);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}
export {
    GetAllFilme
  };
  