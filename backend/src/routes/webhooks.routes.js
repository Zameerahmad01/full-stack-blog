import { Router } from "express";
import bodyParser from "body-parser";
import { clerkWebhook } from "../controllers/webhooks.controller.js";

const router = Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);

export default router;
