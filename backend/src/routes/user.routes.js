import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const router = Router();

router.get("/register", register);

export default router;
