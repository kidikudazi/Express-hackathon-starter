'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      author_id: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.TEXT
      },
      body: {
        type: Sequelize.TEXT
      },
      tag: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};