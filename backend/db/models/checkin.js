'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.NUMERIC,
    location: DataTypes.STRING,
    wine_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Checkin.associate = function(models) {
    Checkin.belongsTo(models.Wine, {foreignKey: "wine_id"});
    Checkin.belongsTo(models.User, {foreignKey: "user_id"});
    Checkin.hasMany(models.Comment, {
      foreignKey: "checkin_id",
      onDelete: "cascade",
      hooks: true,
    })
  };
  Checkin.all = async function (Wine, User, Comment) {
    const allCheckin = await Checkin.findAll({
      include: [Wine, User, {model: Comment, include: User}]
    });
    return allCheckin
  };
  Checkin.userCheckin = async function (user_id) {
    const allCheckin = await Checkin.findAll({
      where: {user_id}
    })
    return allCheckin
  };
  Checkin.wineCheckin = async function(wine_id) {
    const allCheckin = await Checkin.findAll({
      where: {wine_id}
    });
    return allCheckin
  };
  Checkin.createCheckin = async function (Wine,data,User) {
    const newCheckin = await Checkin.create(data);
    const checkinData = await Checkin.findOne({
      where: {id: newCheckin.id},
      include: [Wine, User]
    })
    return checkinData
  }
  Checkin.delete = async function (id) {
    let checkin = await Checkin.findByPk(id);
    await checkin.destroy();
    return checkin
  }
  Checkin.update = async function (updateDescription, id) {
    let checkin = await Checkin.findByPk(id);
    let updatedCheckin = await checkin.update({description: updateDescription})
    return updatedCheckin;
  }
  return Checkin;
};

module.exports = router;
// UPDATE
