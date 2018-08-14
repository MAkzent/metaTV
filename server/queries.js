const knex = require('./knex');

const getAllComments = async () => {
  const output = await knex.select().from('comments');
  return output;
}

const insert = async (data) =>{
  console.log(data)
  await knex('comments').insert({
    videoTimestamp: Number(data.videoTimestamp),
    text: data.text,
  })
}

module.exports = { getAllComments, insert }