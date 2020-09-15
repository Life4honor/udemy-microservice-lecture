import cors from 'cors';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handlers'
import express from 'express';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
    console.log("Listening on 3000 port");
});