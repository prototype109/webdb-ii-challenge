exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN")
      .unique()
      .notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("milage").notNullable();
    tbl.string("transmissionType");
    tbl.string("titleStatus");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cars");
};
