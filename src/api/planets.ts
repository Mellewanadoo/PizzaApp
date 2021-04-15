import { Router } from "express";
import { PlanetModel } from "../database";

export const router = Router();

router.get("/planets", async (req, res) => {
    const planets = await PlanetModel.query();
    res.json(planets);
});
router.get("/planets/:id", async (req, res) => {
    const planets = await PlanetModel.query().findById(req.params.id)
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

router.patch("/planets/:id", async (req, res) => {
    const { image } = req.body;
    const { nom } = req.body;
    const { localisation } = req.body;
    const { paysage } = req.body;
    const { especesInteligentes } = req.body;
    const { premiereApparition } = req.body;
    const planets = await PlanetModel.query()
        .patchAndFetchById(req.params.id,{
            image, nom, localisation, paysage, especesInteligentes, premiereApparition,
        })
        .returning("*");
    res.json(planets);
});

router.delete("/planets/:id", async (req, res) => {
    const planets = await PlanetModel.query()
        .deleteById(req.params.id)
        .returning("*");
    res.json(planets);
});
