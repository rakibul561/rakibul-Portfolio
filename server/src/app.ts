import compression from "compression";
import cors from "cors";
import express from "express";
import { AuthRouter } from "./app/modules/auth/auth.route";
import { BlogRouter } from "./app/modules/blog/blog.route";
import { ProjectRouter } from "./app/modules/project/project.route";

const app = express();

// Middleware
app.use(cors()); 
app.use(compression()); 
app.use(express.json()); 

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use("/api/auth", AuthRouter)
app.use("/api/blog", BlogRouter)
app.use("/api/project", ProjectRouter)

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});


// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
