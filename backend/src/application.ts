import * as express from "express";
import { moodController } from "./controllers/mood";
import { pingController } from "./controllers/ping";
import * as cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(pingController);
app.use(moodController);

export default app;
