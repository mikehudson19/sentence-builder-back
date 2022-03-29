'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('WordTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wordType: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('WordTypes');
  }
};
