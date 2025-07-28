import { config } from "dotenv";

config();

export const env = {
  CLIENT_URL: process.env.CLIENT_URL,
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  DATABASE_URI: process.env.DATABASE_URI,
};
