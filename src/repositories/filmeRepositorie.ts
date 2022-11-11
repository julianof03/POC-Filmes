import { QueryArrayResult } from "pg";
import { connection } from "../database/database.js";
import {Filme} from "../protocols/filme"

async function GetFilme(){
    const query: QueryArrayResult = await connection.query(`
      SELECT * FROM "Filme"`);
    return(query.rows);
}
async function CreateFilme(body: Filme){

  const query: QueryArrayResult = await connection.query(`
    INSERT INTO "Filme" 
    ("name", "stream", "category", "watched") 
    VALUES ($1, $2, $3, $4)`, [body.name, body.stream, body.category, body.watched]);
  return(query);
}

async function DeleteFilmeRepository(id: number){

  const query: QueryArrayResult = await connection.query(`
    DELETE FROM "Filme" WHERE id = $1`, [id]);
  return(query);
}

async function UptadeFilmeRepository(id: number){
  const query: QueryArrayResult = await connection.query(`
  UPDATE "Filme"
  SET watched = $1
  WHERE id = $2;`, [true, id]);
  return(query);
}

async function FilterPlatformRepository(platform: string){

  const query: QueryArrayResult = await connection.query(`
  SELECT * FROM "Filme" WHERE "stream" = $1`, [platform]);
  return(query.rows);
}
async function FilterCategoryRepository(category: string){

  const query: QueryArrayResult = await connection.query(`
  SELECT * FROM "Filme" WHERE "category" = $1`, [category]);
  return(query.rows);
}




export { 
  GetFilme, 
  CreateFilme, 
  DeleteFilmeRepository, 
  UptadeFilmeRepository,
  FilterPlatformRepository,
  FilterCategoryRepository
}  