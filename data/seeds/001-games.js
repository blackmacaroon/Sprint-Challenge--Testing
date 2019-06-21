
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'SkipBo', genre: 'Card', releaseYear: 1967},
        {title: 'Fatal Frame', genre: 'Survival/Horror/PS2', releaseYear: 2001},
        {title: "Conker's Bad Fur Day", genre: 'Platform/Adult/N64', releaseYear: 2001},
        {title: 'Risk', genre: 'Strategy/Board', releaseYear: 1957},
        {title: 'Killer Bunnies', genre: 'Card', releaseYear: 2004},
        {title: 'Carcassonne', genre: 'Strategy/Board', releaseYear: 2000}

      ]);
    });
};
