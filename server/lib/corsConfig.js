import cors from "cors";
import { env } from "./envSchema.js";

export const corsConfig = cors({
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  origin: env.CLIENT_URL,
});
