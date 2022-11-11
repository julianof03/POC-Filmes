import { QueryResultRow } from "pg";
import { connection } from "../database/database.js";

async function GetFilme(){
    const query: QueryResultRow = await connection.query(`
      SELECT * FROM "Filme"`);
    return(query.rows);
}


export { GetFilme }  