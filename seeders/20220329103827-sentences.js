'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sentences', [
      { value: "Tumblr kitsch cred VHS pok pok, shaman seitan direct trade enamel pin.", createdAt: new Date() },
      { value: "Banjo meggings biodiesel mixtape retro migas.", createdAt: new Date() },
      { value: "Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund", createdAt: new Date() }
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sentences');
  }
};
