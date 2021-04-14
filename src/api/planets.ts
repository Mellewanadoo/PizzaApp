import { Router } from "express";
import { PlanetModel } from "../database";

export const router = Router();

router.get("/planets", async (req, res) => {
    const planets = await PlanetModel.query();
    res.json(planets);
});

router.post("/planets", async (req, res) => {
    const { image } = req.body;
    const { nom } = req.body;
    const { localisation } = req.body;
    const { paysage } = req.body;
    const { especesInteligentes } = req.body;
    const { premiereApparition } = req.body;
    const planets = await PlanetModel.query()
        .insert({
            image, nom, localisation, paysage, especesInteligentes, premiereApparition,
        })
        .returning("*");
    res.json(planets);
});

router.patch("/planets", async (req, res) => {
    const { image } = req.body;
    const { nom } = req.body;
    const { localisation } = req.body;
    const { paysage } = req.body;
    const { especesInteligentes } = req.body;
    const { premiereApparition } = req.body;
    const planets = await PlanetModel.query()
        .update({
            image, nom, localisation, paysage, especesInteligentes, premiereApparition,
        })
        .returning("*");
    res.json(planets);
});

router.delete("/planets", async (req, res) => {
    const planets = await PlanetModel.query()
        .delete()
        .returning("*");
    res.json(planets);
});
