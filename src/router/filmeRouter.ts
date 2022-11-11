import { GetAllFilme, CreateNewFilme, DeleteFilme } from "../controllers/filmeController.js";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", GetAllFilme);
router.post("/", CreateNewFilme);
router.delete("/:id", DeleteFilme);

export default router;