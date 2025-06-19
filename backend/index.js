import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./db/index.js";
import webhooksRoutes from "./routes/webhooks.routes.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(clerkMiddleware());
app.use("/api/webhooks", webhooksRoutes);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

//routes
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "something went wrong!",
    status: err.status,
    stack: err.stack,
  });
});

//connect database and run server
ConnectDB()
  .then((res) => {
    console.log("connect to database mongodb");
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
  });
