import Express from "express";
import { env } from "./lib/envSchema.js";
import { connectDb } from "./db/mongoose.js";
import { AdminRouter } from "./routes/AdminRoute.js";
import { corsConfig } from "./lib/corsConfig.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFound from "./middleware/not-found.js";
import cors from "cors";

const app = Express();

// middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ hello: "world" });
});

// routes
app.use("/api/v1/admin", AdminRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDb(env.DATABASE_URI);

    app.listen(env.PORT, () => {
      console.log(`server running on ${env.BASE_URL}/${env.PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
