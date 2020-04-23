
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tvshows').del()
    .then(function () {
      // Inserts seed entries
      return knex('tvshows').insert([
        {id: 1, name: 'Breaking bad'},
        {id: 2, name: 'GOT'},
        {id: 3, name: 'Rick and Morty'}
      ]);
    });
};
