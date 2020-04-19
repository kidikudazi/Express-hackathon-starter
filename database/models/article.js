'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    author_id: DataTypes.BIGINT,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    tag: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.User,{
    	foreignKey: 'author_id',
    	onDelete: 'CASCADE'
    })
  };
  return Article;
};