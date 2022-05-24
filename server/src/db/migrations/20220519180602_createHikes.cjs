/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("hikes", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.string("location").notNullable();
    table.integer("difficulty").notNullable();
    table.string("routeType").notNullable();
    table.text("description");
    table.decimal("length");
    table.integer("elevationChange");
    table.string("completed")
    table.string("wishList")
    table.string("image")
    table.bigInteger("userId").unsigned().index().references("users.id");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("hikes");
};
