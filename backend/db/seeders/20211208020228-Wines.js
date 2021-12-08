"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Wines", [
      {
        name: "Château Lafite Rothschild",
        description:
          "Château Lafite’s second wine owes its name to the group of plots in the Carruades plateau, next to the Chateau’s vines on the hilltop. It is a blend of 50-70% Cabernet Sauvignon, 30-50% Merlot, 0-5% Cabernet Franc and Petit Verdot.",
        winery: "Château",
        image:
          "https://images.ctfassets.net/zpx0hfp3jryq/5YMCk8lsF2KWi6uDGWoydc/6a49ab7a4a63befa189c92c58fed9493/5f204eced34009b3760c67af_img1.jpg?fm=jpg&fl=progressive",
        user_id: 1,
      },
      {
        name: "Penfolds Grange",
        description:
          "Penfolds Grange is a multi-region, multi varietal blend and is widely regarded as a collectors' item. This Australian First Growth equivalent is made predominantly from Syrah grapes and a small percentage of Cabernet Sauvignon and is priced anywhere over $500.",
        winery: "Australian First Growth",
        image:
          "https://www.lagunacellar.com/media/catalog/product/p/e/penfolds-grange_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
        user_id: 2,
      },
      {
        name: "Penfolds Bin 311 Chardonnay",
        description:
          "The Bin 311 Chardonnay uses fruit sourced from Adelaide Hills, Tasmania, and Tumbarumba. This wine offers mineral acidity, citrus flavors and complex aromas of crème brûlée, ripe white nectarine and peach fruit, much to the delight of any wine enthusiast.",
        winery: "Adelaide Hills",
        image: "https://www.wine-searcher.com/images/labels/11/07/10001107.jpg",
        user_id: 3,
      },
      {
        name: "Tignanello",
        description:
          "Tignanello is the most famous of Antinori’s wines. It gets its name from a 47-hectare vineyard in the Santa Cristina estate. It is made from 85% Sangiovese, 10% Cabernet Sauvignon and 5% Cabernet Franc and is loved for its acidity, freshness, and austerity.",
        winery: "Santa Cristina estate",
        image:
          "https://www.haskells.com/media/catalog/product/cache/1/image/816x1200/040ec09b1e35df139433887a97daa66f/t/i/tig.jpg",
        user_id: 1,
      },
      {
        name: "Brut Premier",
        description:
          "This elegantly complex, non-vintage Champagne combines four vintage wines in a blend of 40% Chardonnay, 40% Pinot Noir, and 20% Pinot Meunier. It is deliciously creamy with toast and almond characteristics.",
        winery: " Louis Roederer",
        image:
          "https://static.specsonline.com/wp-content/uploads/2021/08/073459901604.jpg",
        user_id: 2,
      },
      {
        name: "Harlan Estate 2010",
        description:
          "The magnificent Harlan Estate 2010 is rich and full-bodied, layered with expressive dark red and black fruit, cloves, menthol, and leather notes. This Napa Valley wine is best after 3-5 years of bottle age and drinks well over the following 30 years.",
        winery: " Napa Valley",
        image: "https://cdn.klwines.com/images/skus/1160333x.jpg",
        user_id: 3,
      },
      {
        name: "2016 Scharzhofberger Riesling Kabinett",
        description:
          "This Riesling is lush and complex on the palate with a herbal mineral quality complemented by berry, earth, musk, and apple notes. It offers a very clear and fresh nose with spicy aromas. While it tastes delicious when consumed young, it also has great aging potential.",
        winery: "Riesling",
        image:
          "http://cdn.shopify.com/s/files/1/0304/0074/1515/products/Scharzhofberger-Riesling-Kabinett-Egon-Muller_1200x1200.jpg?v=1592725007",
        user_id: 1,
      },
      {
        name: "Scharzhof Riesling QbA",
        description:
          "The Scharzhof QbA wine makes a great introduction to Egon Muller Rieslings. Its grapes are sourced from Müller’s Saarburg and Wawern vineyards, and the Wiltinger Braunfels and Kupp vineyards. This light, yet intense wine has a palate that features lime and slate flavors and a peach mid palate.",
        winery: "Müller’s Saarburg and Wawern",
        image:
          "https://www.gordonswine.com/wp-content/uploads/product_images/product-15694-1629390119-24043-300x300.jpg",
        user_id: 2,
      },
      {
        name: "2016 Screaming Eagle, The Flight",
        description:
          "This Napa Valley red wine is made of Cabernet Franc, Merlot, Cabernet Sauvignon grapes. It is full-bodied, refined, and expressive, punctuated with notes of black olives, lavender, hazelnuts, blackberries, and violets.",
        winery: "Napa Valley",
        image: "https://www.winebid.com/Photo/Medium/1185012",
        user_id: 3,
      },
      {
        name: "Screaming Eagle Sauvignon Blanc 2011",
        description:
          "The Screaming Eagle Sauvignon Blanc is held as the most expensive Sauvignon Blanc ever sold at an average price of $5,900+. (The Cabernet Sauvignon fetches $3,600+ on average.) A mere 30 cases are produced in a year and are sold “in-house” and to selected loyal fans of the brands.",
        winery: " Cabernet Sauvignon",
        image:
          "https://i0.wp.com/socialvignerons.com/wp-content/uploads/2018/03/Screaming-Eagle-Sauvignon-Blanc-Oakville-white-wine-most-expensive-napa-valley-barrel-world.jpg?resize=400%2C725",
        user_id: 1,
      },
      {
        name: "2007 Grands-Echezeaux, Domaine de la Romanée-Conti",
        description:
          "This wine has flavors of ripe raspberry and cherry with a roasted meat dimension. You’ll enjoy its rich, creamy texture with hints of vanilla and caramel and savory notes of cardamom and ginger.",
        winery: "Domaine de la Romanée-Conti",
        image: "https://cdn.klwines.com/images/skus/1028810x.jpg",
        user_id: 2,
      },
      {
        name: "Côte-Rôtie, La Mouline, E. Guigal",
        description:
          "La Mouline is a dry red, full-bodied wine made of 100% Syrah. It is voluptuous, silky and offers exotic aromas of flowers, spice, bacon fat, earth, pepper, black and red fruit, and more.",
        winery: " Cote Brune",
        image:
          "https://www.wine-searcher.com/images/labels/31/47/10153147.jpg?width=292&height=222&fit=bounds&canvas=242,222",
        user_id: 3,
      },
      {
        name: "La Tâche, Domaine de la Romanée-Conti",
        description:
          "This Burgundy Côte de Nuits red wine is made of Pinot Noir grapes. Wine lovers covet it for its leather, tobacco, earth and smoky notes and rich fruit flavor. It is bolder than the flagship DRC wine as slightly younger vines are used in its production.",
        winery: "Burgundy Côte de Nuits",
        image:
          "https://www.wine-searcher.com/images/labels/19/13/10981913.jpg?width=327&height=280&fit=bounds&canvas=327,280",
        user_id: 1,
      },
      {
        name: "Dom Perignon",
        description:
          "Dom Perignon is a vintage Champagne named after a 17th-century Benedectine monk who was one of the pioneers for Champagne wine. It is made of 60% Chardonnay and 40% Pinot Noir. You’ll never come across a non-vintage Dom Perignon as each bottle contains grapes only from the same year.",
        winery: "Benedectine",
        image:
          "https://images.albertsons-media.com/is/image/ABS/960080958?$ecom-pdp-desktop$&defaultImage=Not_Available",
        user_id: 2,
      },
      {
        name: "Moet Imperial",
        description:
          "The iconic Moet Imperial is loved for its vibrant fruitiness, a seductive palate, and refined elegance. It is made of Pinot Noir, Pinot Meunier, and Chardonnay. It has a yellow color with green highlights and has the intensity of green apple and citrus fruit with nuances of white flowers.",
        winery: "Loire Valley",
        image:
          "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00000000895057/77b94d2d7155786881f78fbc6972712a_0ecdfb2a-9686-4865-a81e-34590ead992e_large.png&width=512&type=webp&quality=80",
        user_id: 3,
      },
      {
        name: "2013 Catena Zapata 'Catena' Appellations Selection En Fuego Malbec",
        description:
          "This vibrant 2013 vintage is a delightful combination of richness and freshness. Let the blackberry and strawberry-scented red wine take over your palate. You can open this intense Argentinian wine at your dinner table as soon as you buy it now.",
        winery: "Catena",
        image: "https://cdn.klwines.com/images/skus/1413942x.jpg",
        user_id: 1,
      },
      {
        name: "1997 Catena Zapata Estiba Reservada",
        description:
          "After 22 years in three different types of barrels in the winery, this age-worthy wine has developed in pleasantly unpredictable ways! Remember to decant its sediments to fully enjoy its barrel-infused aromas of French oak, tobacco, and vanilla.",
        winery: "Catena",
        image:
          "https://i.pinimg.com/originals/de/b5/23/deb523d780c46439bfb753313ddaaca4.jpg",
        user_id: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Wines", null, {});
  },
};
