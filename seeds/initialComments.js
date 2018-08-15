
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {videoTimestamp: 834, text: "Zilean has really good synergies with Nocturne because of his ult. Noc will probably start red, get an early gank at lvl 2, and then another one at lvl 6. If Nocturne gets ahead early, we can expect him to snowball. If not, he'll be pretty much useless in lategame."},
        {videoTimestamp: 907, text: "Don't think they can hold up that pressure for super long. Varus will just outscale them and be super dangerous from min 15."},
        {videoTimestamp: 1164, text: "100 Thieves are playing with an early game combo, will be interesting to see how much impact Kindred really has."},
      ]);
    });
};
