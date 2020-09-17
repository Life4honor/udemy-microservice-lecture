import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/error-handlers";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
const app = express();
app.use(express.json());
app.use(cors());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on 3000 port");
});
