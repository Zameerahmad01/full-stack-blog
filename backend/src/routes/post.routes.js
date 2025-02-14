import { Router } from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import { verifyAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", verifyAuth, createPost);
router.delete("/:id", verifyAuth, deletePost);
router.patch("/feature", verifyAuth, featurePost);

export default router;
