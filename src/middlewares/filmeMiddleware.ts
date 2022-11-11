import { FilmeSchema } from "../schema/filmeSchema.js";
import { Request, Response } from 'express';
import { Filme } from "../protocols/filme.js";
export function ValidateBody(req:Request, res: Response){

    const body = req.body as Filme;
    
    const {error} = FilmeSchema.validate(body);

    if(error){
      return res.status(400).send({
        message: error.message
      });
    }
}