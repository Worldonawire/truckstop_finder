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
    table.specificType("amenities", "text[]");
    table.specificType("payments", "text[]");
    table.specificType("restaurants", "text[]");
  });
};

exports.down = function(knex, Promise) {};
