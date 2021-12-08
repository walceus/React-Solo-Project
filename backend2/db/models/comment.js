'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    checkin_id: DataTypes.INTEGER,
    wine_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Checkin, { foreignKey: "checkin_id" });
    Comment.belongsTo(models.User, { foreignKey: "user_id" });
    Comment.belongsTo(models.Wine, {foreignKey: "wine_id"})
  };
  Comment.checkinComments = async function (User, checkin_id) {
    const allComment = await Comment.findAll({
      where: {checkin_id},
      include: User
    })
    return allComment
  };

  Comment.createComment = async function (data, User) {
    const createdComment = await Comment.create(data);
    const response = await Comment.findOne({
      where: {id: createdComment.id},
      include: User
    })
    return response
  }
  Comment.delete = async function(id) {
    let comment = await Comment.findByPk(id);
    await comment.destroy();
    return comment
  }
  return Comment;
};

Comment.update = async function (updateBody, id) {
  let comment = await Comment.findByPk(id);
  let updatedComment = await comment.update({ body: updateBody });
  return updatedComment;
};

// UPDATE
module.exports = router;
