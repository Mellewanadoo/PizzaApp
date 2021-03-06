import { Router } from "express";
import { PizzaModel } from "../database";

export const router = Router();

router.get("/pizzas", async (req, res) => {
  const pizzas = await PizzaModel.query();
  res.json(pizzas);
});

router.post("/pizzas", async (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { size } = req.body;
  const { photo } = req.body;
  const pizza = await PizzaModel.query()
    .insert({
      name,
      price,
      size,
      photo,
    })
    .returning("*");
  res.json(pizza);
});

router.patch("/pizzas/:id", async (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { size } = req.body;
  const { photo } = req.body;
  const pizza = await PizzaModel.query()
    .patchAndFetchById(req.params.id, {
      name,
      price,
      size,
      photo,
    })
    .returning("*");
  res.json(pizza);
});

router.delete("/pizzas:id", async (req, res) => {
  const pizza = await PizzaModel.query()
    .deleteById(req.params.id)
    .returning("*");
  res.json(pizza);
});
