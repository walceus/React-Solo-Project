'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    winery: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Wine.associate = function(models) {
    Wine.hasMany(models.Checkin, {foreignKey: "wine_id"})
    Wine.hasMany(models.Comment, {foreignKey: "wine_id"})
    Wine.belongsTo(models.User, {foreignKey: "user_id"})
  };
  Wine.allWine = async function () {
    const allWine = await Wine.findAll();
    return allWine
  }

  return Wine;
};
