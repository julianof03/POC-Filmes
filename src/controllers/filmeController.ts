import { Request, Response } from 'express';
import { Filme } from '../protocols/filme.js';
import { 
  GetFilme,           
  CreateFilme,         
  DeleteFilmeRepository,         
  UptadeFilmeRepository, 
  FilterPlatformRepository,
  FilterCategoryRepository
} from '../repositories/filmeRepositorie.js'

async function GetAllFilme(req: Request, res: Response) {
    try {
        const filme = await GetFilme();
      res.status(201).send(filme);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
}
async function CreateNewFilme(req: Request, res: Response) {
  const body: Filme = req.body;
  try {
      const filme = await CreateFilme(body);
    res.status(201).send("ok");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
async function DeleteFilme(req: Request, res: Response) {
  const id: string = req.params.id;
  try {
    const filme = await DeleteFilmeRepository(Number(id));
    res.status(201).send("ok");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
async function UpDateFilme(req: Request, res: Response) {
  const id: string = req.params.id;
  try {
    const filme = await UptadeFilmeRepository(Number(id));
    res.status(201).send("ok");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
async function FilterPlatform(req: Request, res: Response) {
  const platform: string = req.params.platform;
  try {
    const filme = await FilterPlatformRepository(platform);
    res.status(201).send(filme);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function FilterCategory(req: Request, res: Response) {
  const category: string = req.params.category;
  try {
    const filme = await FilterCategoryRepository(category);
    res.status(201).send(filme);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export {
    GetAllFilme,
    CreateNewFilme,
    DeleteFilme,
    UpDateFilme,
    FilterPlatform,
    FilterCategory 
  };
  