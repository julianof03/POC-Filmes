import { GetAllFilme } from "../controllers/filmeController.js";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/", GetAllFilme);

export default router;