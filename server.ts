import express, { Request, Response } from "express";
import { PORT } from "./configs/env.config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello from container" });
});

app.listen(PORT, () => {
  console.log(`👍 Server is listening on http://localhost:${PORT}`);
});
