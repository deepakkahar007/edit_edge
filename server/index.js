import Express from "express";
import { env } from "./lib/envSchema.js";

const app = Express();

app.get("/", (req, res) => {
  return res.status(200).json({ hello: "world" });
});

app.listen(env.PORT, () => {
  console.log(`server running on ${env.BASE_URL}/${env.PORT}`);
});
