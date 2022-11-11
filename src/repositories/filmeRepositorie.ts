import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Filme } from "../protocols/filme"

async function GetFilme(): Promise<QueryResult<Filme[]>>{
      return connection.query(`
      SELECT * FROM "Filme"`);
}
async function CreateFilme(body: Filme): Promise<QueryResult>{
  return connection.query(`
    INSERT INTO "Filme"
    ("name", "stream", "category", "watched") 
    VALUES ($1, $2, $3, $4)`, [body.name, body.stream, body.category, body.watched]);
}

async function DeleteFilmeRepository(id: number): Promise<QueryResult>{
  return connection.query(`
    DELETE FROM "Filme" WHERE id = $1`, [id]);
}

async function UptadeFilmeRepository(id: number,  note: string): Promise<QueryResult>{
  return connection.query(`
  UPDATE "Filme"
  SET watched = $1, note = $2
  WHERE id = $3;`, [true, note, id]);
}

async function FilterPlatformRepository(platform: string): Promise<QueryResult>{
  return connection.query(`
  SELECT * FROM "Filme" WHERE "stream" = $1`, [platform]); 
}

async function FilterCategoryRepository(category: string): Promise<QueryResult>{

  return connection.query(`
  SELECT * FROM "Filme" WHERE "category" = $1`, [category]);
}




export { 
  GetFilme, 
  CreateFilme, 
  DeleteFilmeRepository, 
  UptadeFilmeRepository,
  FilterPlatformRepository,
  FilterCategoryRepository
}  