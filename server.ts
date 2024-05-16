import express, { Request, Response } from "express";
import { DB, PORT } from "./configs/env.config";
import mongoose from "mongoose";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello from container" });
});

mongoose
  .connect(DB)
  .then(() => console.log("👍 DB Connected Successfully"))
  .catch((err: Error) => console.log("❌ DB Error => ", err.message));

app.listen(PORT, () => {
  console.log(`👍 Server is listening on http://localhost:${PORT}`);
});
