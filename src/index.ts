import express from "express";
import "./env";
import { router } from "./api";

const app = express();
console.log()
app.use(express.json());
app.use(router);

app.listen(process.env.PORT);
