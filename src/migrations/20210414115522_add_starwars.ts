import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("planets", (table) => {
    table.increments("id").unique().primary().notNullable();
    table.string("image");
    table.string("nom");
    table.string("localisation");
    table.string("paysage");
    table.string("especesInteligentes");
    table.string("premiereApparition");
  });
  await knex.schema.createTable("vaisseau", (table) => {
    table.increments("id").unique().primary().notNullable();
    table.string("image");
    table.string("nom");
    table.string("type");
    table.boolean("lightSpeed");
    table.integer("equipage");
    table.integer("nbPassenger");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("planets");
  await knex.schema.dropTable("vaisseau");
}
