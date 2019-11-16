exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "98XZ77", make: "Honda", model: "thing", mileage: 101010101 }
      ]);
    });
};
