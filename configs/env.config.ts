import dotenv from "dotenv";
dotenv.config();

export const PORT: string = process.env.PORT || "4000";
export const DB: string = process.env.DB_URI || "";
