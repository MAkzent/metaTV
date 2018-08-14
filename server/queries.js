const knex = require('./knex');

const getAllComments = async () => {
  const output = await knex.select().from('comments');
  return output;
}

module.exports = { getAllComments }