import { Router } from "express";
import {
  getComments,
  createComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { verifyAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:postId", getComments);
router.post("/:postId", verifyAuth, createComment);
router.delete("/:id", verifyAuth, deleteComment);

export default router;
