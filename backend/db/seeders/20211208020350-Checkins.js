"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Checkins", [
      {
        description: "Ah, a German Reisling, what a treat",
        image: "https://rb.gy/nzowdc",
        rating: 4.5,
        wine_id: 2,
        user_id: 1,
        location: "Wine Makers Boutique",
      },
      {
        description:
          "Is that a.. I think it is, a Domaine Romanée Conti La Tache, my favourite'",
        image: "https://rb.gy/mqumfu",
        rating: 4.5,
        wine_id: 5,
        user_id: 2,
        location: "Domaines",
      },
      {
        description: "Mmm, robust",
        image: "https://rb.gy/vhx2oo",
        rating: 5,
        wine_id: 2,
        user_id: 2,
        location: "BevMax",
      },
      {
        description:
          "Truly dense wine legs on show here, I do hope they start serving the bread soon!",
        image: "https://rb.gy/kz60q6",
        rating: 5,
        wine_id: 2,
        user_id: 3,
      },
      {
        description:
          "This Grüner Veltliner is ideal when paired with fresh herbs",
        image:
          "https://kdvr.com/wp-content/uploads/sites/11/2021/07/GettyImages-1191285127.jpg?w=2121&h=1414&crop=1",
        rating: 5,
        wine_id: 3,
        user_id: 3,
      },
      {
        description: "This is exquisite!!",
        image:
          "https://kdvr.com/wp-content/uploads/sites/11/2021/07/GettyImages-1191285127.jpg?w=2121&h=1414&crop=1",
        rating: 4,
        wine_id: 2,
        user_id: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Checkins", null, {});
  },
};
