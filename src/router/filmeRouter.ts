import { 
    GetAllFilme, 
    CreateNewFilme,         
    DeleteFilme, 
    UpDateFilme,          

} from "../controllers/filmeController.js";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", GetAllFilme);
router.post("/", CreateNewFilme);

router.delete("/:id", DeleteFilme);
router.post("/:id", UpDateFilme);



export default router;