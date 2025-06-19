import { Router } from "express";
import { savePost, savedPosts } from "../controllers/user.controller.js";
import { verifyAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/savedPosts", verifyAuth, savedPosts);
router.patch("/savePost", verifyAuth, savePost);

export default router;
