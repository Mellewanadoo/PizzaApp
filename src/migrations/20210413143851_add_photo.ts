import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("pizzas", (table) => {
        table.float("price").notNullable().defaultTo(9.99);
        table.enum("size", ["S", "L", "XL"]).notNullable().defaultTo("S");
        table.string("photo").notNullable().defaultTo("https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-vecteurs-libre%2Fpizza&psig=AOvVaw0dNDH_kySG51nJMUQHs4O8&ust=1618404316845000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAxZ2g--8CFQAAAAAdAAAAABAD")
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("pizzas", (table) => {
        table.dropColumn("price");
        table.dropColumn("size");
        table.dropColumn("photo");
    });
}

