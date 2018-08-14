const knex = require('./knex');

export const getAllComments = async () => {
  const output = await knex.select().from('comments');
  return output;
}