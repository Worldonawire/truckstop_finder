exports.up = function(knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments("id").notNullable();
    table.text("name").notNullable();
    table.text("type");
    table.text("state");
    table.text("city");
    table.text("address");
    table.float("latitude");
    table.float("longitude");
    table.specificType("amenities", "text ARRAY");
    table.specificType("payments", "text ARRAY");
    table.specificType("restaurants", "text ARRAY");
  });
};
exports.down = function(knex, Promise) {};
