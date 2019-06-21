exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", tbl => {
    tbl.increments();
    tbl.string("title", 100).notNullable().unique();
    tbl.string("genre", 100).notNullable();
    tbl.integer("releaseYear");
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists("games");   
};
