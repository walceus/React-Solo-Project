"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          body: "WOOOOOOOW GRAPE",
          user_id: 2,
          checkin_id: 1,
          wine_id: 2,
        },
        {
          body: "That's amazing",
          user_id: 3,
          checkin_id: 1,
          wine_id: 5,
        },
        {
          body: "Bring me some next time",
          user_id: 2,
          checkin_id: 1,
          wine_id: 3,
        },
        {
          body: "ONE EYE OPEN WHEN IM SLEEPING ONE EYEEEEE",
          user_id: 3,
          checkin_id: 1,
          wine_id: 2,
        },
        {
          body: "I wonder what cheese that would be good with",
          user_id: 2,
          checkin_id: 1,
          wine_id: 4,
        },
        {
          body: "BING BONG",
          user_id: 3,
          checkin_id: 2,
          wine_id: 4,
        },
        {
          body: "What's Up baby talk me out to dinner",
          user_id: 2,
          checkin_id: 2,
          wine_id: 1,
        },
        {
          body: "TURN ME UUUUPPPPP",
          user_id: 3,
          checkin_id: 2,
          wine_id: 3,
        },
        {
          body: "SOLLUMINATI GIVE ME ONE MORE CHAAAAANCE",
          user_id: 2,
          checkin_id: 2,
          wine_id: 1,
        },
        {
          body: "GIve the guy a mmmmmmAAAAAP",
          user_id: 2,
          checkin_id: 2,
          wine_id: 7,
        },
        {
          body: "Speed 99 speed 99 the zombies are turnin on the jets",
          user_id: 3,
          checkin_id: 3,
          wine_id: 6,
        },
        {
          body: "HEEEEEEEEE",
          user_id: 2,
          checkin_id: 3,
          wine_id: 5,
        },
        {
          body: "Oh you thought things were sweet NAAAAHHHH",
          user_id: 2,
          checkin_id: 3,
          wine_id: 1,
        },
        {
          body: "AAAAAAYYYYOOOOOOO",
          user_id: 3,
          checkin_id: 3,
        },
        {
          body: "Spare change pleeeeease",
          user_id: 2,
          checkin_id: 4,
          wine_id: 2,
        },
        {
          body: "IF you see these dogs in your front yard",
          user_id: 1,
          checkin_id: 2,
          wine_id: 7,
        },
        {
          body: "BYRONE",
          user_id: 2,
          checkin_id: 5,
          wine_id: 3,
        },
        {
          body: "JUUST KNOW IM GOING HARD",
          user_id: 2,
          checkin_id: 2,
          wine_id: 1,
        },
        {
          body: "Life change when you famous I remember back before in chains we was nameless",
          user_id: 3,
          checkin_id: 4,
          wine_id: 5,
        },
        {
          body: "Open up your eyes man they only entertainers",
          user_id: 2,
          checkin_id: 4,
          wine_id: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
