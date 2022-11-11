import { 
    GetAllFilme, 
    CreateNewFilme,         
    DeleteFilme, 
    UpDateFilme,          
    FilterPlatform,
    FilterCategory
} from "../controllers/filmeController.js";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", GetAllFilme);
router.post("/", CreateNewFilme);

router.delete("/:id", DeleteFilme);
router.post("/:id", UpDateFilme);

router.get("/stream/:platform", FilterPlatform);
router.get("/category/:category", FilterCategory);

export default router;