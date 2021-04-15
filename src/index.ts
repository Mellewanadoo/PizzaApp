import express from "express";
import "./env";
import { router } from "./api";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

app.listen(process.env.PORT);
