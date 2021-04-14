import { Model } from "objection";
import Knex from "knex";
import config from "./knexfile";

export const database = Knex(config);

Model.knex(database);

export class PizzaModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  size!: "S"|"L"|"XL";
  photo!: string;


  static get tableName() {
    return "pizzas";
  }

  static get idColumn() {
    return "id";
  }
}
export class PlanetModel extends Model {
  id!: number;
  image!: string;
  nom!: string;
  localisation!: string;
  paysage!: string;
  especesInteligentes!: string;
  premiereApparition!: string;


  static get tableName() {
    return "planets";
  }

  static get idColumn() {
    return "id";
  }
}
export class VaisseauModel extends Model {
  id!: number;
  image!: string;
  nom!: string;
  type!: string;
  lightSpeed!: boolean;
  equipage!: number;
  nbPassenger!: number;


  static get tableName() {
    return "vaisseau";
  }

  static get idColumn() {
    return "id";
  }
}

