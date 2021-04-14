import { Router } from "express";
import { VaisseauModel } from "../database";

export const router = Router();

router.get("/vaisseau", async (req, res) => {
    const vaisseau = await VaisseauModel.query();
    res.json(vaisseau);
});

router.post("/vaisseau", async (req, res) => {
    const { image } = req.body;
    const { nom } = req.body;
    const { type } = req.body;
    const { lightSpeed } = req.body;
    const { equipage } = req.body;
    const { nbPassenger } = req.body;
        const vaisseau = await VaisseauModel.query()
        .insert({
            image, nom, type, lightSpeed, equipage, nbPassenger,
        })
        .returning("*");
    res.json(vaisseau);
});

router.patch("/vaisseau", async (req, res) => {
    const { image } = req.body;
    const { nom } = req.body;
    const { type } = req.body;
    const { lightSpeed } = req.body;
    const { equipage } = req.body;
    const { nbPassenger } = req.body;
    const vaisseau = await VaisseauModel.query()
        .update({
            image, nom, type, lightSpeed, equipage, nbPassenger,
        })
        .returning("*");
    res.json(vaisseau);
});

router.delete("/vaisseau", async (req, res) => {
    const vaisseau = await VaisseauModel.query()
        .delete()
        .returning("*");
    res.json(vaisseau);
});
