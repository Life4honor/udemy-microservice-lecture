import cors from "cors";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handlers";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
const app = express();
app.use(cors());
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-service:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on 3000 port");
  });
};

start();
