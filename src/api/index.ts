import { Router } from "express";
import * as pizzas from "./pizzas";
import * as planets from "./planets";
import * as vaisseau from "./vaisseau";
export const router = Router();

router.use("/api", pizzas.router);
router.use("/api", planets.router);
router.use("/api", vaisseau.router)
