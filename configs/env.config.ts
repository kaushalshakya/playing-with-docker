import dotenv from "dotenv";
dotenv.config();

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const PORT: string = process.env.PORT || "4000";
export const DB: string = process.env.DB_URI || "";
export const tokens: Tokens = {
  accessToken: process.env.ACCESS_TOKEN || "",
  refreshToken: process.env.REFRESH_TOKEN || "",
};
