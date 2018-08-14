
exports.up = function(knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.integer('videoTimestamp');
    table.string('text', 400);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
