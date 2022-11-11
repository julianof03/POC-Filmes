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
  return(query.rows);
}
async function DeleteFilmeRepository(id){

  const query: QueryArrayResult = await connection.query(`
    DELETE FROM "Filme" WHERE id = $1`, [id]);
  return(query);
}




export { GetFilme, CreateFilme, DeleteFilmeRepository }  