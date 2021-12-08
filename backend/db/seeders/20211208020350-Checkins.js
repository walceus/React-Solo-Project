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
        location: "Milford Mall",
      },
      {
        description:
          "This Grüner Veltliner is ideal when paired with fresh herbs",
        image:
          "https://media.istockphoto.com/photos/french-dry-red-wine-pours-into-glass-trendy-pink-background-picture-id1127220988?k=20&m=1127220988&s=612x612&w=0&h=qHg_Ar0TmBsAoKgx6Yy00Q2t3mDtYczSNIMCdtbq7wA=",
        rating: 5,
        wine_id: 3,
        user_id: 3,
        location: "Trumbull Mall",
      },
      {
        description: "This is exquisite!!",
        image:
          "https://media.istockphoto.com/photos/red-wineglass-and-bottle-copy-space-picture-id1297401631?b=1&k=20&m=1297401631&s=170667a&w=0&h=6ZY_oidUVZWgmSwQ1k2Iuan7-MMy30p4JlDyzJFdMXQ=",

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
